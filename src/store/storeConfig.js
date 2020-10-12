import { createStore,compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import reducer from './reducers/auth';
 
const composeEnhances = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const store = createStore(reducer,composeEnhances(applyMiddleware(thunk)))

// const persistConfig = {
//   key: 'root',
//   storage:storage,
//   whitelist: ['token'],
// }
 
// const persistedReducer = persistReducer(persistConfig, reducer)
 
//   export const store = createStore(persistedReducer,composeEnhances(applyMiddleware(thunk)))
//   export const persistor = persistStore(store)
  
