import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import VerticalWhiteLogo from '../../../../assets/logos/rincao_logo_ver_white.png'
import BazanaLogo from '../../../../assets/logos/bazana_logo.png'

import './styles.css'

const PageA = () => (
  <section className="page a">
    <div className="title-wrapper">
      <div className="title">
        <div className="content">
          <h2>Plano de</h2>
          <h1>PATROCÍNIO</h1>
        </div>
      </div>
    </div>

    <div className="logo-wrapper">
      <div className="logo">
        <div className="content">
          <img
            src={VerticalWhiteLogo}
            alt="Logo Vertical Branco do Rincão da Inclusão"
            loading="lazy"
          />

          <div className="contact">
            <div className="item">
              <FontAwesomeIcon icon={faInstagram} />
              <h4>rincaodainclusao</h4>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faWhatsapp} />
              <h4>(55) 9944-2172</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="watermark-wrapper">
      <div className="watermark">
        <img
          src={BazanaLogo}
          alt="Logo Horizontal do Parque de Eventos Bazana"
          loading="lazy"
        />
      </div>
    </div>
  </section>
)

export default PageA
