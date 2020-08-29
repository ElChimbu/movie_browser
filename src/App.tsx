import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Navbar} from './components/navbar/index';
import {Newsfeed} from './pages/newsfeed/index';
import Error from './pages/error/index';

class App extends React.Component {
  public render() {
    return (
      <Router>
      <Switch>
        <Route exact path='/' component={Navbar} />
        <Route exact path='/newsfeed' component={Newsfeed} />
        <Route component={Error} />
      </Switch>
      </Router>
    );
  }
}

export default App;