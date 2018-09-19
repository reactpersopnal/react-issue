import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Position from './Position'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Position/>, document.getElementById('test'))
registerServiceWorker();
