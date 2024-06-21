import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styles from './scss/styles.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  // ReactDOM.createRoot(document.getElementById('root')).render( // Their version - we changed the syntax.
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
