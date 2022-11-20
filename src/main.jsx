// Importaciones por defecto
import React from 'react';
import App from './App';
// Importaciones de dependencias
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
// Importaciones de traduccion
import es from './translations/es/global.json';
import en from './translations/en/global.json';
// Importaciones de estilos
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// Inicializacion de la configuracion del traductor
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
});

// Insercion del app component y los providers en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
