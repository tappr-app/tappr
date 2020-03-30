import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleware} from 'redux';
import { beerReducer } from './reducers/beerReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(beerReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App /> 
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// IF IT BREAKS USE STRICT MODE vvv
{/* <React.StrictMode>
<App />
</React.StrictMode> */}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
