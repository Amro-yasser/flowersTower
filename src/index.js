import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/auth';
import HomeComponent from './Components/HomeComponent'
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route, Redirect ,HashRouter} from 'react-router-dom';
// import { persistor,store } from './store/storeConfig'
// import { loadState,saveState} from './localStorage';
import Login from './Login';


const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : [];
const composeEnhances = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer,persistedState,composeEnhances(
  applyMiddleware(thunk)
))

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
})
const app= (
  <>
  <Provider store ={store}>
    {/* <HashRouter> */}
    <BrowserRouter>
      <Switch>
    {/* <PersistGate loading={null} persistor={persistor}> */}
        <App>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={HomeComponent}/>
        </App>
    {/* </PersistGate> */}
      </Switch>    
    </BrowserRouter>  
    {/* </HashRouter> */}
  </Provider>
  </>

)


ReactDOM.render(
  <React.StrictMode>
    
    {app}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
