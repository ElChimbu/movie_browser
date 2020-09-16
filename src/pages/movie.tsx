import Styled from 'styled-components'
import { useParams } from 'react-router'
import React, { useState, useEffect } from 'react'
import { MoviesService } from '../services/MoviesService'
import { LoadingView } from './../components/LoadingView'

const Img = Styled.img`
  width: 230px;
  height: 330px
`

type IMovieFile = {
  loading: boolean
  title: string
  overview: string
  poster_path: string
  release_date: string
}

export default function Movie() {
  const { id }: any = useParams()
  const [response, setResponse] = useState<IMovieFile>({
    loading: true,
    title: '',
    overview: '',
    poster_path: '',
    release_date: '',
  })

  useEffect(() => {
    id &&
      MoviesService.FindById(id).then((results) => {
        setResponse({ loading: false, ...results })
      })
  })

  if (response.loading) {
    return <LoadingView />
  }

  return (
    <article className="flex justify-center flex-wrap p-6">
      <div className="flex flex-col">
        <header className="text-center text-lg mb-2 bg-gray-300">
          <h1>{response.title}</h1>
        </header>
        <Img src={`https://image.tmdb.org/t/p/w500/${response.poster_path}`} />
      </div>
      <div className="w-8/12 p-8 flex-grow align-middle text-justify">
        <p className="text-lg font-semibold mb-2">Plot:</p>
        <p>{response.overview}</p>
        <div>
          <p className="mt-6 text-sm font-semibold">
            Release Date: <span>{response.release_date}</span>
          </p>
        </div>
      </div>
    </article>
  )
}
