import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import Sponsorships from './components/Sponsorships'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Sponsorships />}
        />
        <Route
          path="/sponsorships"
          element={<Sponsorships />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
