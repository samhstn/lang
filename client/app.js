import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, browserHistory } from 'react-router';

import routes from './routes.js';
import reducers from './reducers/index.js';

// import 'main.scss' at some point

const store = createStore(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('app')
);
