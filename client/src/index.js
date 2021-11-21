import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//implement redux reducers in the entry point of the application which is the index.js
//1. import redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools())


//5. provide redux store to the entire application - dispatching actions etc. by wrapping the App component with Provider component from react-redux
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
