import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from "redux-saga";

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import loginReducer from './reducers/loginReducer'
import projectsReducer from './reducers/projectReducer'
import Routes from './routes/Routes'
import rootSaga from "./sagas/rootSaga";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(combineReducers({
    loginReducer,
    projectsReducer,
  }), applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//Assignment-1(18-08-2020)
// let arr = [1,2,3,4,5]
// function* iterate_array(a){ 
//   let i=0; 
//   while(i<a.length){ 
//     yield console.log(a[i]); 
//     i++;
//   }
// }

// const it = iterate_array(arr);
// it.next()
// it.next()
// it.next()
// it.next()
// it.next()
// it.next()

//Assignment-2
// let user = "Sanjay"

// function* greet_user(user){ 
//   while(true){ 
//     yield console.log("Good Morning "+ user)
//   }
// };

// const itr = greet_user(user);
// itr.next();