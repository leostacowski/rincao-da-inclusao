import { useMemo, useContext, useCallback } from 'react'

import { MdMenu, MdClose } from 'react-icons/md'

import { AppContext } from '../../index.jsx'
import Button from '../Button/index.jsx'

import './index.scss'

const NavBar = () => {
  const { appState, setAppState } = useContext(AppContext) || {}

  return useMemo(
    () => (
      <section
        id="NavBar"
        className={appState?.showNavBar ? 'show' : ''}
      >
        <div id="Content">
          <Button type="primary">
            <h2>
              HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO
              HELLOOOOO HELLOOOOO
            </h2>
          </Button>
          <Button type="primary">
            <h2>
              HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO
              HELLOOOOO HELLOOOOO
            </h2>
          </Button>
          <Button type="primary">
            <h2>
              HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO
              HELLOOOOO HELLOOOOO
            </h2>
          </Button>
          <Button type="primary">
            <h2>
              HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO
              HELLOOOOO HELLOOOOO
            </h2>
          </Button>
          <Button type="primary">
            <h2>
              HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO HELLOOOOO
              HELLOOOOO HELLOOOOO
            </h2>
          </Button>
        </div>
      </section>
    ),
    [appState?.showNavBar],
  )
}

export default NavBar
