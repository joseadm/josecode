import React from 'react';

const Podcast = ({image, description}) => {
    return (
        <li className="border-gray-400 flex flex-row mb-4">
        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col rounded-md bg-gray-300 justify-center items-center mr-4">
            <img
              className="rounded-md h-20"
              src={image}
            />
          </div>
          <div className="flex-1 pl-1">
            <div className="font-sm text-sm">
              {description}
            </div>
          </div>
        </div>
      </li>
    )
}

export default Podcast;