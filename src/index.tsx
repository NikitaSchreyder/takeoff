import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('state', JSON.stringify(state));
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
