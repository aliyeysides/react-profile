import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require("!style!css!sass!../scss/app.scss");
// require('../scss/app.scss');

ReactDOM.render(<App/>, document.getElementById('app'));