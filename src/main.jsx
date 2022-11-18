import React from 'react'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import es from './translations/es/global.json';
import en from './translations/en/global.json';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: es
    },
    en: {
      global: en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
