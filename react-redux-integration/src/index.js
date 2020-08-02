import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './reducers/Reducer'
import * as serviceWorker from './serviceWorker';

const vehicleStore = createStore(Reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={vehicleStore}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
