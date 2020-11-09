import React from 'react';
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Article = ({ title, icon, date, readingTime, blogId }) => {
    return (
        <li key={blogId} className="border-gray-400 flex flex-row mb-4">
                <Link href="/blog/[id]" as={"/blog/" + blogId}>

                <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4" >
          <img className=" rounded-md w-10 h-10 justify-center" style={{objectFit: 'cover'}} src={icon} />
          </div>
          <div className="flex-1 pl-1 mr-16">
            <div className="font-medium">
              {title}
            </div>
            <div className="text-gray-600 text-sm">
              {date} - {readingTime} minutes lecture
            </div>
          </div>
          <div className="text-gray-600 text-xs">
            <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />
          </div>
        </div>
        </Link>
      </li>
    )
}

export default Article;