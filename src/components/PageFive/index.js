import React from 'react'
import Page from '../Page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import HorizontalWhiteLogo from '../../assets/rincao_logo_hor_colored.png'

import './styles.css'

const PageFive = () => {
  return (
    <Page>
      <section className="page-five content">
        <section className="logo-section">
          <img
            className="logo-img"
            src={HorizontalWhiteLogo}
            alt="Logo Quadrado Preto do Rincão da Inclusão"
          />
        </section>

        <section className="greeting-section">
          <h1 className="m-0 title-h1">OBRIGADA!</h1>
          <section className="contact-section">
            <section className="contact">
              <FontAwesomeIcon icon={faInstagram} />
              <h2 className="m-0 title-h2">rincaodainclusao</h2>
              <section />
            </section>
            <section className="contact">
              <FontAwesomeIcon icon={faWhatsapp} />
              <h2 className="m-0 title-h2">(55) 9944-2172</h2>
              <section />
            </section>
          </section>
        </section>
      </section>
    </Page>
  )
}

export default PageFive
