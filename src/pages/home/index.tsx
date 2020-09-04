import React from 'react';
import { Card } from '../../components/card/index';
import {CardContext} from '../../components/contextAPI/index';

export const Home = () => {
return(
    <CardContext.Consumer>
        {
            value => value.map( movie =>{
                return <li className="list-none mr-auto ml-auto">
                <Card genre={movie.genre} img={movie.img} title={movie.title} key={movie.id}/>
            </li>
            })
        }
    </CardContext.Consumer>
)
}