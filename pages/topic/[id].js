// Topic/[id].js
import Head from "next/head";
import { useState, useEffect } from "react";
import fire from "../../config/fire-config";
import Navbar from "../../components/Navbar";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import tw from "twin.macro";
import React from "react";
import VideoPlayer from "../../components/VideoPlayer";
import Link from "next/link";

import ReactPaginate from "react-paginate";

const Main = tw.div`flex mb-4 container flex-col lg:flex-row mx-auto my-8`;

const BlogSection = tw.div`w-full lg:w-2/3`;

const MediaSection = tw.div`w-full  lg:w-1/3`;

const BlogList = tw.ul`flex flex-col  p-4 w-full md:w-11/12 `;

const VideoList = tw.ul`flex flex-col  p-4 w-full`;

const Topic = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  let pageSize = 6;
  let field = "readingTime";

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

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

  const getData = async () => {
    fire
      .firestore()
      .collection("blog")
      .where("topic", "==", props.id)
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const slice = blogs.slice(offset, offset + perPage);

        const postData = slice.map((blog) => (
          <Article
            title={blog.title}
            icon={blog.icon}
            date={blog.date}
            readingTime={blog.readingTime}
            blogId={blog.id}
          />
        ));
        setData(postData);
        setPageCount(Math.ceil(blogs.length / perPage));
      });
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  if (!Topic) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Head>
          <title>josecode</title>
        </Head>
        <Navbar />
        <Main>
          <BlogSection>
          <p>
            {" "}
            <Link href="/">
              <a className="text-base pl-4 md:text-sm text-teal font-bold no-underline hover:underline text-gray-700">
                &lt; BACK TO BLOG
              </a>
            </Link>
          </p>
            <h1 className="pl-4 pt-4 font-medium">Artiles topic {props.id} 📝</h1>
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
                  pageClassName={
                    "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4  inline"
                  }
                  previousClassName={
                    "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-l inline"
                  }
                  nextClassName={
                    "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-r inline"
                  }
                />
              </BlogList>
            </div>
          </BlogSection>
          <MediaSection>
            <h1 className="pl-4 font-medium">Vídeos 🎥</h1>
            <div className="container flex mx-auto w-full">
              <VideoList>
                {videos.map((video) => (
                  <VideoPlayer video={video} />
                ))}
              </VideoList>
            </div>
            <hr />
            <br />
            <h1 className="pl-4 font-medium">Podcast 🎙</h1>
            <div className="container flex mx-auto w-full">
              <VideoList>
                {podcasts.map((podcast) => (
                  <VideoPlayer video={podcast} />
                ))}
              </VideoList>
            </div>
            <hr />
            <Newsletter />
          </MediaSection>
        </Main>
        <Footer />
      </div>
    </div>
  );
};

Topic.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  };
};

export default Topic;
