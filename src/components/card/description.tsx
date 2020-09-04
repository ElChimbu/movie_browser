import React from 'react';
import { Img } from './index';
import  Styled  from 'styled-components';

type IMovieFile = {
    title: string;
    plot: string;
    director: string;
    actors: string;
}

const TextStyles = Styled.p`
    font-size: 0.875rem;
    font-weight: 600;
    margin-top: 1rem
`

export const MovieFile = ({title, plot, director, actors}: IMovieFile) =>{
return(
<article className="flex justify-center flex-wrap p-6">
    <div className="flex flex-col">
        <header className="text-center text-lg mb-2 bg-gray-300">
            <h1>
                {title}
            </h1>
        </header>
        <Img src="https://placekitten.com/230/330" />
    </div>
    <div className="w-8/12 p-8 flex-grow align-middle text-justify">
        <p className="text-lg font-semibold mb-2">
            Plot:
        </p>
        <p>{ plot }
        </p>
        <TextStyles> 
            <p className="mt-4">
            Directed by: <span>{director}</span>
            </p>
             <p className="mt-4">
            Actors: {actors}
            </p> 
        </TextStyles>
    </div>
</article>
)
}