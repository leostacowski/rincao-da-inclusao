import React from 'react'
import Page from '../Page'

import HorizontalWhiteLogo from '../../assets/rincao_logo_hor_white.png'
import SquareWhiteLogo from '../../assets/rincao_logo_square_white.png'
import HorizontalBazanaLogo from '../../assets/bazana_logo_hor_white.png'

import './styles.css'

const PageOne = () => {
  return (
    <Page>
      <section className="page-one content">
        <section className="left-logo-section">
          <img
            className="logo-img"
            src={SquareWhiteLogo}
            alt="Logo Quadrado Branco do Rincão da Inclusão"
          />
        </section>

        <section className="top-logo-section">
          <img
            className="logo-img"
            src={HorizontalWhiteLogo}
            alt="Logo Horizontal Branco do Rincão da Inclusão"
          />

          <img
            className="logo-img bazana-logo"
            src={HorizontalBazanaLogo}
            alt="Logo Horizontal Branco do Parque de Eventos Bazana"
          />
        </section>

        <section className="title-section">
          <h2 className="m-0 title-h2">Plano de</h2>
          <h1 className="m-0 title-h1">PATROCÍNIO</h1>
        </section>
      </section>
    </Page>
  )
}

export default PageOne
