import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Store from './AssessmentThree/Store';
import { fetchMovies } from './AssessmentThree/Slice';
Store.dispatch(fetchMovies())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App/>
    </Provider>
);