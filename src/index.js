import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/assets/boxicons-2.0.7/css/animations.css';
import '../src/assets/boxicons-2.0.7/css/boxicons.css';
import '../src/assets/boxicons-2.0.7/css/boxicons.min.css';
import '../src/assets/boxicons-2.0.7/css/transformations.css';
import {store} from './redux/store.jsx';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
