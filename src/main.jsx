import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import global_fr from './../src/translations/fr/global.json'
import global_en from './../src/translations/en/global.json'
import global_es from './../src/translations/es/global.json'
import global_de from './../src/translations/de/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { global: global_en },
    es: { global: global_es },
    de: { global: global_de },
    fr: { global: global_fr }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
