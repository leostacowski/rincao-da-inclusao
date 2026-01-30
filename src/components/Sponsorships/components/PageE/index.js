import React from 'react'

import InstagramCode from '../../../../assets/codes/instagram.svg'
import WhatsappCode from '../../../../assets/codes/whatsapp.svg'
import FormCode from '../../../../assets/codes/form.svg'
import HorizontalColoredLogo from '../../../../assets/logos/rincao_logo_hor_colored.png'
import BazanaLogo from '../../../../assets/logos/bazana_logo.png'

import './styles.css'

const PageE = () => (
  <section className="page e">
    <div className="content-wrapper">
      <div className="title-wrapper">
        <div className="title">
          <h2>Entre em</h2>
          <h1>CONTATO</h1>
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contact">
          <div className="item">
            <h3>Instagram</h3>
            <img
              src={InstagramCode}
              alt="QR Code do Instagram do Rincão da Inclusão"
              loading="lazy"
            />
            <h4>@rincaodainclusao</h4>
          </div>

          <div className="item">
            <h3>WhatsApp</h3>
            <img
              src={WhatsappCode}
              alt="QR Code do WhatsApp do Rincão da Inclusão"
              loading="lazy"
            />
            <h4>(55) 9944-2172</h4>
          </div>

          <div className="item">
            <h3>Formulário de Triagem</h3>
            <img
              src={FormCode}
              alt="QR Code do Formulário de Triagem do Rincão da Inclusão"
              loading="lazy"
            />
            <h4>Acesse no Google Forms</h4>
          </div>
        </div>
      </div>

      <div className="watermark-wrapper">
        <div className="watermark">
          <img
            className="bazana-logo"
            src={BazanaLogo}
            alt="Logo Horizontal do Parque de Eventos Bazana"
            loading="lazy"
          />
          <img
            src={HorizontalColoredLogo}
            alt="Logo Horizontal Colorido do Rincão da Inclusão"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
)

export default PageE
