import React from "react";

const Topics = () => {
  return (
      <div className="w-full md:w-11/12  pt-4">




<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 w-1/2 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div class="bg-gray-300 h-40 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/.NET_Logo.svg/1200px-.NET_Logo.svg.png)"}}></div>

            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              
              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-full m rounded-full m-1 bg-purple-100" >
                  <div class="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                </div>
                <div class="category-title flex-1 text-sm"> .NET</div>
              </div>

             
            </div>
          </div>

          <div class="p-4 w-1/2 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div class="bg-gray-300 h-40 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png)"}}></div>
            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5"> 
              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-yellow-500 " ></div>
                </div>
                <div class="category-title flex-1 text-sm"> Javascript</div>
              </div>
            </div>
          </div>

          <div class="p-4 w-1/2 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div class="bg-gray-300 h-40 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: "url(https://hyperdrivedesigns.com/wp-content/uploads/2015/05/angular-post.png)"}}></div>


            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              
              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-red-500 " ></div>
                </div>
                <div class="category-title flex-1 text-sm"> Angular</div>
              </div>
             
            </div>
          </div>
</div>


      </div>

  );
};

export default Topics;
