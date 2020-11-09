// blog/[id].js

// pages/index.justify
import Head from "next/head";
import { Main } from "../styled";
import Navbar from "../../components/Navbar";

import { useEffect, useState } from "react";
import fire from "../../config/fire-config";
import Link from "next/link";

const Blog = (props) => {
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
    return <div>
          <Head>
    <title>jdev</title>
  </Head>
  <Navbar />
    </div>;
  }

  return (
    <div>

    <Head>
    <title>jdev</title>
  </Head>
  <Navbar />
  <Main>

  <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </Main>

      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}

Blog.getInitialProps = ({ query }) => {
    return {
        id: query.id,
    }
}

export default Blog