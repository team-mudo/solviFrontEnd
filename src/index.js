import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { CookiesProvider } from 'react-cookie';
import promise from 'redux-promise';

import reducers from './reducers';
import App from './components/app';
import './style.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <CookiesProvider>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    </CookiesProvider>
    , document.querySelector('.container')
);