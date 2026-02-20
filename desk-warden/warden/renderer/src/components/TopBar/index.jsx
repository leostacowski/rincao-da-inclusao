import { useMemo, useContext, useCallback } from 'react'

import { MdMenu, MdClose } from 'react-icons/md'

import { AppContext } from '../../index.jsx'
import Button from '../Button/index.jsx'

import './index.scss'

const TopBar = () => {
  const { appState, setAppState } = useContext(AppContext) || {}

  const onToggleMenu = useCallback(() => {
    setAppState((prevState) => ({
      ...prevState,
      showNavBar: !Boolean(prevState?.showNavBar),
    }))
  }, [])

  return useMemo(
    () => (
      <section id="TopBar">
        <div id="Content">
          <Button
            type="secondary"
            onClick={onToggleMenu}
          >
            {appState?.showNavBar ? <MdClose /> : <MdMenu />}
          </Button>
          <h1>Warden</h1>
        </div>
      </section>
    ),
    [onToggleMenu, appState?.showNavBar],
  )
}

export default TopBar
