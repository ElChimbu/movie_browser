import * as React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import {Home} from './pages/home/index';
import Error from './components/error/index';
import { AppWraper } from './template/index';
import { ContainerCard } from './components/containerCard/index';
import { MovieFile } from './components/card/description';

class App extends React.Component {
public render() {
return (
<AppWraper>
  <ContainerCard>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movies/:id' component={MovieFile} />
        <Route component={Error} />
      </Switch>
    </Router>
  </ContainerCard>
</AppWraper>
);
}
}

export default App;