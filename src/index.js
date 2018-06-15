import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
// import registerServiceWorker from './registerServiceWorker';

// import { BrowserRouter } from 'react-router-dom'

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});



// const store = createStore(rootReducer);




const store = createStore(rootReducer, composeWithDevTools(
  //applyMiddleware(...middleware),
  // other store enhancers if any
))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));