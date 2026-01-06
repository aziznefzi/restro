import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n';

import { ThemeContextProvider } from './app/context/themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </ThemeContextProvider>
)
