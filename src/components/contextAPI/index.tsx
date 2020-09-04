import React, {createContext, useState, ReactNode} from 'react';

type ICardContext = {
    children: ReactNode
}

const data = [{ 
    id: 'asdasda',
    genre: 'Fantasy',
    img: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    title: 'pachano contra los fantasmas',
    plot: 'alta peli man',
    director: 'el bana',
    actors: 'Tom Cruise'},  
    {genre: 'Fantasy',
    img: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    title: 'pachano contra los fantasmas',
    plot: 'alta peli man',
    director: 'el bana',
    actors: 'Tom Cruise'},
    {genre: 'Fantasy',
    img: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    title: 'PACHANO CONTRA LOS FANTASMAS',
    plot: 'alta peli man',
    director: 'el bana',
    actors: 'Tom Cruise'}]

export const CardContext = createContext(data);

const Context = ({children}: ICardContext) =>{
    
    const [cardProp, setCardProp] = useState(CardContext)
        return(
            <CardContext.Provider value={data}>
                {children}
            </CardContext.Provider>
        )
    }

export default Context