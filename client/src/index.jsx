import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styles from './scss/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
