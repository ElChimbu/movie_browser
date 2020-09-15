import React, {useState, useEffect} from 'react';
import { Img } from './index';
import { MoviesService } from '../../services/MoviesService'
import {useParams} from 'react-router'

type IMovieFile = {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
}

export const MovieFile = () =>{
const { id } : any = useParams();
const [response, setResponse] = useState<IMovieFile>({title: '', overview: '', poster_path: '', release_date:''})

useEffect(() => {
    {
        id ?
        MoviesService.FindById(id).then( results => {
            setResponse(results)
        }) : null
    }
  });

return(
    
<article className="flex justify-center flex-wrap p-6">
    <div className="flex flex-col">
        <header className="text-center text-lg mb-2 bg-gray-300">
            <h1>
                {response.title}
            </h1>
        </header>
        <Img src={`https://image.tmdb.org/t/p/w500/${response.poster_path}`} />
    </div>
    <div className="w-8/12 p-8 flex-grow align-middle text-justify">
        <p className="text-lg font-semibold mb-2">
            Plot:
        </p>
        <p>
            {response.overview}
        </p>
        <div>
         <p className="mt-6 text-sm font-semibold">
            Release Date: <span>{response.release_date}</span>
        </p>
        </div>
    </div>
</article>
)
}