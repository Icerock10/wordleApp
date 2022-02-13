import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/animations.css';
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducer/rootReducer";
import thunk from 'redux-thunk';
import { HashRouter } from "react-router-dom";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>
    </Provider>,
  document.getElementById('game')
);
