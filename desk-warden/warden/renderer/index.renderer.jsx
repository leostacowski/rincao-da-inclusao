import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './src/index.jsx'

import './src/index.scss'

createRoot(document.getElementById('warden')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
