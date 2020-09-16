import React, { useEffect } from 'react'
import { Card } from '../components/Card'
import { Link, useLocation } from 'react-router-dom'
import { useMovies } from '../components/MoviesContext'
import { MoviesService } from '../services/MoviesService'
import { LoadingView } from './../components/LoadingView'

type IResults = {
  results: object[]
}

export default function Movies() {
  const { loading, results, setResponse } = useMovies()
  const location = useLocation()
  const search = new URLSearchParams(location.search).get('search')

  useEffect(() => {
    search
      ? MoviesService.SearchMovies(search).then(({ results }: IResults) => {
          setResponse(false, results)
          console.log(results)
        })
      : MoviesService.PopularMovies().then(({ results }: IResults) => {
          setResponse(false, results)
        })
  }, [search, setResponse])

  if (loading) {
    return <LoadingView />
  }

  return (
    <>
      {results.map(
        (movie: {
          id: string
          original_language: string
          poster_path: string
          title: string
        }) => (
          <Link key={movie.id} to={`movies/${movie.id}`}>
            <li className="list-none">
              <Card
                lang={movie.original_language}
                img={movie.poster_path}
                title={movie.title}
              />
            </li>
          </Link>
        )
      )}
    </>
  )
}
