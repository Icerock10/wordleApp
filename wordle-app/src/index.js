import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import wordReducer from "./reducer/wordReducer";
import thunk from 'redux-thunk';

const store = createStore(wordReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </Provider>,
  document.getElementById('game')
);
