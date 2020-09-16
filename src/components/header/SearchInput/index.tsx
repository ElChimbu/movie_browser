import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export function SearchInput() {
  const history = useHistory()
  const [value, setValue] = useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const val = value
    e.preventDefault()

    if (val) {
      setValue('')
      history.push(`/?search=${val}`)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex">
      <input
        name="title"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
        className="flex-1 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder="Type your movie name"
      />
      <button
        type="submit"
        className="flex-2 ml-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Go!
      </button>
    </form>
  )
}
