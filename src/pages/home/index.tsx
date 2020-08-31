import React from 'react';
import Navbar from '../../components/navbar/index';
import { Header } from './../../components/header/index';
import {Card} from '../../components/card/index';

export const Home = () => {
return(<>
    <div className="flex justify-center flex-wrap bg-gray-900 w-full h-64">
        <div>
            <Header>
                <div className="mb-2">
                    <h1 className="text-white text-xl">Search your favorite movies here</h1>
                </div>
                <Navbar />
            </Header>
        </div>
    </div>
    <div className="rounded-md ml-auto mr-auto -mt-8 shadow-2xl bg-gray-200 w-3/4 h-64">
        <Card></Card>
    </div>
</>
)
}