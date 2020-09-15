import React from 'react'
import {Home} from './pages/home/index';
import AppWraper from './template/index';
import Error from './components/error/index';
import { MoviesProvider } from './components/MoviesContext/index';
import { MovieFile } from './components/card/description';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";


export const Routes = () =>{
return(
    <Router>
        <AppWraper>
            <MoviesProvider>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/movies/:id' component={MovieFile} />
                    <Route component={Error} />
                </Switch>
            </MoviesProvider>
        </AppWraper>
    </Router>
)
}

export default Routes