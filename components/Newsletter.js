import React from 'react';

const Newsletter = () => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg text-center ml-4 mt-4">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 mt-4">¡Subscribe to our newsletter!</div>
    <p class="text-gray-700 text-base">
      You will receive articles about software development and other news currently in work. <strong>No spam</strong>
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">

  <form class="bg-white  mb-4">
    <div class="mb-4">

      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-gray-800 hover:bg-gray-900 text-white mx-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        ✍️  ¡I'll subscribe!
      </button>
    </div>
  </form>
  </div>
</div>
    );
}

export default Newsletter;
