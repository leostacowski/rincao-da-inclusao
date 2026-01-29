import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import One from './components/PageOne'
import Two from './components/PageTwo'
import Three from './components/PageThree'
import Four from './components/PageFour'
import Five from './components/PageFive'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<One />}
        />
        <Route
          path="/print"
          element={
            <>
              <One />
              <Two />
              <Three />
              <Four />
              <Five />
            </>
          }
        />
        <Route
          path="/two"
          element={<Two />}
        />
        <Route
          path="/three"
          element={<Three />}
        />
        <Route
          path="/four"
          element={<Four />}
        />
        <Route
          path="/five"
          element={<Five />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
