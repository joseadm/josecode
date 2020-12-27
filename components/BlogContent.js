import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

const BlogContent = ({title, content, icon, date}) => {
  return (
    <div className="container w-full mx-auto  text-gray-700">
      <div className="w-full px-4 md:px-6 text-xl font-light text-grey-darkest leading-normal">
        <div className="font-sans">
          <span className="text-base md:text-sm text-teal font-bold"></span>
          <p>
            {" "}
            <Link href="/">
                <a className="text-base md:text-sm text-teal font-bold no-underline hover:underline">&lt; BACK TO BLOG</a>
            </Link>
          </p>
          <h1 className="font-sans break-normal text-black pt-6 pb-2 text-3xl md:text-4xl font-bold">
          <img
              className=" rounded-md w-12 h-12 justify-center inline-block mr-2"
              style={{ objectFit: "cover" }}
              src={icon}
            /> {title}{" "}
          </h1>
          <p className="text-xs md:text-base font-light text-grey-dark">
            Published {date}
          </p>
        </div>
        <article className="prose-lg pt-10">
            <ReactMarkdown plugins={[gfm]} children={content} />
        </article>

      </div>

      <div className="text-base md:text-sm text-grey px-4 py-6">
        Tags:{" "}
        <a
          href="#"
          className="text-base md:text-sm text-teal no-underline hover:underline"
        >
          Link
        </a>{" "}
        .{" "}
        <a
          href="#"
          className="text-base md:text-sm text-teal no-underline hover:underline"
        >
          Link
        </a>
      </div>

      <hr className="border-b-2 border-grey-light mb-8 mx-4" />

      <div className="font-sans flex justify-between content-center px-4 pb-12">
        <div className="text-left">
          <span className="text-xs md:text-sm font-normal text-grey-dark">
            &lt; Previous Post
          </span>
          <br />
          <p>
            <a
              href="#"
              className="break-normal text-base md:text-sm text-teal font-bold no-underline hover:underline"
            >
              Blog title
            </a>
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs md:text-sm font-normal text-grey-dark">
            Next Post &gt;
          </span>
          <br />
          <p>
            <a
              href="#"
              className="break-normal text-base md:text-sm text-teal font-bold no-underline hover:underline"
            >
              Blog title
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
