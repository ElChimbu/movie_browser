import React from 'react'

export function Footer() {
  return (
    <footer className="fixed bottom-0 text-center text-white bg-gray-900 w-full h-12">
      <a
        href="https://developers.themoviedb.org/3/getting-started/introduction"
        target="blank"
        className="t-4"
      >
        API powered by <span>TMDB API</span>
      </a>
    </footer>
  )
}
