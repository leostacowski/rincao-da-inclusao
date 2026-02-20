import { createContext, useState, useMemo } from 'react'

import NavBar from './components/NavBar/index.jsx'
import TopBar from './components/TopBar/index.jsx'

export const AppContext = createContext({})

const App = () => {
  const [appState, setAppState] = useState({
    showNavBar: false,
  })

  return useMemo(
    () => (
      <AppContext value={{ appState, setAppState }}>
        <TopBar />
        <NavBar />
      </AppContext>
    ),
    [appState],
  )
}

export default App
