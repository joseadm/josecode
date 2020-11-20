// pages/index.justify
import Head from "next/head";
import { useState, useEffect } from "react";
import fire from "../config/fire-config";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
import Video from "../components/Video";
import Topics from "../components/Topics";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Podcast from "../components/Podcast";
import CreatePost from "../components/CreatePost";
import tw from "twin.macro";

const Main = tw.div`flex mb-4 container flex-col lg:flex-row mx-auto my-8`;

 const BlogSection = tw.div`w-full lg:w-2/3`;

const MediaSection = tw.div`w-full  lg:w-1/3`;

const BlogList = tw.ul`flex flex-col  p-4 w-11/12`;

 const VideoList = tw.ul`flex flex-col  p-4 w-full`;
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  let pageSize = 6;
  let field = "readingTime";

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

  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .orderBy(field)
      .limit(10)
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(blogs);
        setBlogs(blogs);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>jdev</title>
      </Head>
      <Navbar />
      <Main>
        <BlogSection>
          <h1 className="pl-4 font-medium">Last Articles 📝</h1>
          <div className="container flex mx-auto w-full">
            <BlogList>
              {blogs.map((blog) => (
                <Article
                  title={blog.title}
                  icon={blog.icon}
                  date={blog.date}
                  readingTime={blog.readingTime}
                  blogId={blog.id}
                />
              ))}
              <div class="inline-flex pt-4">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                  Prev
                </button>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </BlogList>
          </div>
          <hr className="w-11/12" />
          <br />
          <h1 className="pl-4 font-medium pb-4">All topics 📚</h1>
          <Topics />
        </BlogSection>
        <MediaSection>
          <h1 className="pl-4 font-medium">Vídeos 🎥</h1>
          <div className="container flex mx-auto w-full">
            <VideoList>
              {videos.map((video) => (
                <Video image={video.image} description={video.description} />
              ))}
            </VideoList>
          </div>
          <hr />
          <br />
          <h1 className="pl-4 font-medium">Podcast 🎙</h1>
          <div className="container flex mx-auto w-full">
            <VideoList>
              {podcasts.map((podcast) => (
                <Podcast
                  image={podcast.image}
                  description={podcast.description}
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
