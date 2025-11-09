import * as React from 'react';
import App from './app';
import ToastMessage from './Components/ToasterNotification/index';
import ReactDOM from 'react-dom/client';
import 'sanitize.css/sanitize.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { persistor, store } from './Components/Redux/store/index';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastMessage />
      <App />
    </PersistGate>
  </Provider>,
);
