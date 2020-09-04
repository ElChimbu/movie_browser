import * as React from 'react';
import AppWraper from './template/index';
import Routes from './routes/index';

class App extends React.Component {
public render() {
return (
<AppWraper>
      <Routes />
</AppWraper>
);
}
}

export default App;