import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home} from './pages/home/index';
import Error from './pages/error/index';

class App extends React.Component {
  public render() {
    return (
      <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error} />
      </Switch>
      </Router>
    );
  }
}

export default App;