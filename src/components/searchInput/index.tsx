import React, { useState } from 'react';

type SearchInputProps = {
  onSearch: (search: string) => void
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [value, setValue] = useState('')

  const getInput = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
    e.target.reset()
  }

  return (
  <form onSubmit={getInput} className="flex">
    <input
      name="title"
      onChange={getInput}
      type="text" 
      className="flex-1 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      placeholder="Type your movie name" />
    <button
      onClick={() => onSearch(value)}
      className="flex-2 ml-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
      Go!
    </button>
  </form>
  );
}