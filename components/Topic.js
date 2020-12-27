import React from "react";
import Link from "next/link";

// bg-yellow-500
// https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png
const Topic = ({ title, image, color, topic}) => {
  return (
    <Link href="/topic/[id]" as={"/topic/" + topic}>
      <div className="p-4 w-1/2 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto transition duration-300 ease-in-out transform hover:-translate-y-1">
        <div
          className="bg-gray-300 h-40 w-full rounded-lg shadow-md bg-cover bg-center"
          style={{ backgroundImage: image }}
        ></div>
        <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
          <div className="header-content inline-flex ">
            <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
              <div className={"h-2 w-2 rounded-full m-1 " + color}></div>
            </div>
            <div className="category-title flex-1 text-sm">{title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Topic;
