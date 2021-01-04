// pages/index.justify
import Head from "next/head";
import { useState, useEffect } from "react";
import fire from "../config/fire-config";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Podcast from "../components/Podcast";
import tw from "twin.macro";
import React from "react";
import ModalVideo from "react-modal-video";
import Topic from "../components/Topic";
import VideoPlayer from "../components/VideoPlayer";

import axios from 'axios'
import ReactPaginate from 'react-paginate';

const Main = tw.div`flex mb-4 container flex-col lg:flex-row mx-auto my-8`;

const BlogSection = tw.div`w-full lg:w-2/3`;

const MediaSection = tw.div`w-full  lg:w-1/3`;

const BlogList = tw.ul`flex flex-col  p-4 w-full md:w-11/12 `;

const VideoList = tw.ul`flex flex-col  p-4 w-full`;

const Home = () => {

  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  let pageSize = 6;
  let field = "readingTime";

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    fire
      .firestore()
      .collection("videos")
      .onSnapshot((snap) => {
        const videos = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(videos);
      });
  }, []);

  useEffect(() => {
    fire
      .firestore()
      .collection("podcast")
      .onSnapshot((snap) => {
        const podcasts = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPodcasts(podcasts);
      });
  }, []);

  const getData = async() => {      

    fire
      .firestore()
      .collection("blog")
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const slice = blogs.slice(offset, offset + perPage)

        const postData = slice.map(blog => 
          <Article
            title={blog.title}
            icon={blog.icon}
            date={blog.date}
            readingTime={blog.readingTime}
            blogId={blog.id}
          />
        )
        setData(postData)
        setPageCount(Math.ceil(blogs.length / perPage))

      });

  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};

 useEffect(() => {
   getData()
 }, [offset])

  return (
    <div style={{overflow: 'hidden'}}>
      <Head>
        <title>josecode</title>
      </Head>
      <Navbar />
      <Main>
        <BlogSection>
          <h1 className="pl-4 font-medium">Last Articles 📝</h1>
          <div className="container flex mx-auto w-full">
            <BlogList>

       {data}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    
                    pageClassName={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4  inline"}
                    previousClassName={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-l inline"}
                    nextClassName={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-r inline"}
                    
                    />

</BlogList>
          </div>
          <hr className="w-11/12" />
          <br />
          <h1 className="pl-4 font-medium pb-4">All topics 📚</h1>

          <div className="w-full md:w-11/12  pt-4">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <Topic
          title={".NET"}
          color={"bg-purple-500"}
          image={
            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png)"
          }
          topic={"net"}
        />
        <Topic
          title={"Javascript"}
          color={"bg-yellow-500"}
          image={
            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png)"
          }
          topic={"javascript"}
        />
        <Topic
          title={"Angular"}
          color={"bg-red-500"}
          image={
            "url(https://hyperdrivedesigns.com/wp-content/uploads/2015/05/angular-post.png)"
          }
          topic={"angular"}
        />   
        <Topic
          title={"Azure"}
          color={"bg-blue-500"}
          image={
            "url(https://dotnet.microsoft.com/blob-assets/images/customers/azure-app.jpeg?v=nz_1asLqukigxE_j3crpOSgd08kjgFvms8NKt8p5yEE)"
          }
          topic={"azure"}
        /> 
        <Topic
          title={"Node"}
          color={"bg-green-500"}
          image={
            "url(https://colorlib.com/wp/wp-content/uploads/sites/2/node.js-logo.png)"
          }
          topic={"node"}
        /> 
        <Topic
          title={"React"}
          color={"bg-blue-300"}
          image={
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAgww5mYZA_wf-aw5sSIww98KhfSfmRx6Kw&usqp=CAU)"
          }
          topic={"react"}
        /> 
      </div>
    </div>
        </BlogSection>
        <MediaSection>
          <h1 className="pl-4 font-medium">Vídeos 🎥</h1>
          <div className="container flex mx-auto w-full">
            <VideoList>
              {videos.map((video) => (
                <VideoPlayer 
                  video={video}
                  />
              ))}
            </VideoList>
          </div>
          <hr />
          <br />
          <h1 className="pl-4 font-medium">Podcast 🎙</h1>
          <div className="container flex mx-auto w-full">
            <VideoList>
              {podcasts.map((podcast) => (
                                <VideoPlayer 
                                video={podcast}
                                />
              ))}
            </VideoList>
          </div>
          <hr />
          <Newsletter />
        </MediaSection>
      </Main>
      <Footer />
    </div>
  );

};

export default Home;

//       <CreatePost />
