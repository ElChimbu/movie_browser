/* eslint-disable no-use-before-define */
import React from 'react';

export default function Navbar() {
return (
<div className="flex">
  <input
    className="flex-1 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
    type="email" placeholder="Type your movie name" />
  <button
    className="flex-2 ml-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
    Go!
  </button>
</div>
);
}