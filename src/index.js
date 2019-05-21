import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import ReduxPromise from 'redux-promise';


ReactDOM.render(
        <App />
   
    , document.getElementById('root'));
registerServiceWorker();
