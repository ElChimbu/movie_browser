import '@material-ui/styles'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import Context from './components/contextAPI/index';
            
ReactDOM.render(
<Context>
<App />
</Context>, document.querySelector('#root'));