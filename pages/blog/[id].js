// blog/[id].js

// pages/index.justify
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import fire from "../../config/fire-config";
import BlogContent from "../../components/BlogContent";
import { Main, BlogSection, MediaSection, VideoList } from "../styled";
import Video from "../../components/Video";
import Footer from "../../components/Footer";

import Newsletter from "../../components/Newsletter";
import Podcast from "../../components/Podcast";

const Blog = (props) => {
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

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .doc(props.id)
      .get()
      .then((result) => {
        setBlog(result.data());
      });
  }, []);

  if (!blog) {
    return (
      <div>
        <Head>
          <title>jdev</title>
        </Head>
        <Navbar />
        <Main>
          <BlogSection></BlogSection>
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
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>jdev</title>
      </Head>
      <Navbar />
      <Main>
        <BlogSection>
          <BlogContent
            title={blog.title}
            date={blog.date}
            content={blog.content}
            icon={blog.icon}
          />
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

Blog.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  };
};

export default Blog;
