import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

const BlogContent = ({title, content, icon, date}) => {
  return (
    <div className="container w-full mx-auto text-gray-700">
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

      <hr className="border-b-2 border-grey-light mb-8 mx-4 mt-8" />

      <p>
            {" "}
            <Link href="/">
                <a className="text-base md:text-sm text-teal font-bold no-underline hover:underline">&lt; BACK TO BLOG</a>
            </Link>
          </p>
    </div>
  );
};

export default BlogContent;
