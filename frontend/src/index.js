import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  (
    <Provider store={store}>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>),
  document.getElementById('root'),
);
registerServiceWorker();
