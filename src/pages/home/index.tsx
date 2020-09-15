import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from '../../components/card/index';
import { useMovies } from '../../components/MoviesContext/index';
import { MoviesService } from '../../services/MoviesService'

type IResults ={
    results: object[]
}
    
export const Home = () => {
    const { loading, results, setResponse } = useMovies()
    const location = useLocation();
    const search = new URLSearchParams(location.search).get('search')
    useEffect(() => {
        { search ?
            MoviesService.SearchMovies(search).then(({ results }: IResults) => {
                setResponse(false, results)
            }) : 
            MoviesService.PopularMovies().then(({ results }: IResults) => {
                setResponse(false, results)
            })
        }
    }, [search, setResponse])

    return <>
        {
        results.map((movie: { id: string, genre_ids: string, poster_path: string, title: string }) => (
            <Link key={movie.id} to={`movies/${movie.id}`}>  
                <li className="list-none">
                    <Card genre={movie.genre_ids[0]} img={movie.poster_path} title={movie.title}/>
                </li>
            </Link>
        ))
    }</>
}