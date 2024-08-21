import { legacy_createStore as createStore} from 'redux'
// import { legacy_createStore as createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
import {persistReducer , persistStore} from 'redux-persist';
import storageSession from 'redux-persist/es/storage';
import rootReducers from './services/reducers/rootReducers';

// const middleware = [thunk];

const persistConfig = {
    key : 'persist-root',
    storage :storageSession
  }
  const persistReducers = persistReducer(persistConfig , rootReducers );
  const store = createStore(persistReducers
    // ,
    //  applyMiddleware(...middleware)
    );
 export const persistor = persistStore(store);


export default store;