import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import {Home} from '../pages/home/index';
import Error from '../components/error/index';
import { MovieFile } from '../components/card/description';


export const Routes = () =>{
return(
<>
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movies/:id' component={MovieFile} />
            <Route component={Error} />
        </Switch>
    </Router>
</>
)
}

export default Routes