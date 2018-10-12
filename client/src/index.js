import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootswatch/dist/sandstone/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchMeds } from './redux/actions';

let newStore = store()

newStore.dispatch(fetchMeds())

ReactDOM.render(
    <Provider store={newStore}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA