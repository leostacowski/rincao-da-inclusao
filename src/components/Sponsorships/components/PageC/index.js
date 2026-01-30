import React from 'react'

import HorizontalColoredLogo from '../../../../assets/logos/rincao_logo_hor_colored.png'
import BazanaLogo from '../../../../assets/logos/bazana_logo.png'

import './styles.css'

const PageC = () => (
  <section className="page c">
    <div className="content-wrapper">
      <div className="title-wrapper">
        <div className="title">
          <h2>Cotas de</h2>
          <h1>PATROCÍNIO</h1>
        </div>
      </div>

      <div className="quota-wrapper">
        <div className="quota">
          <div className="card">
            <h2>SOLIDÁRIA</h2>
            <h3>R$100,00 (Mensal)</h3>
            <hr />
            <h4>
              Apoio à manutenção básica do projeto (materiais de escritório e
              higienização).
            </h4>
            <hr />
            <h4>Inclui: Certificado digital de apoio social.</h4>
          </div>

          <div className="card">
            <h2>APOIO</h2>
            <h3>R$200,00 (Mensal)</h3>
            <hr />
            <h4>
              Contribuição para a manutenção dos arreios e materiais de segurança da
              Equoterapia.
            </h4>
            <hr />
            <h4>
              Inclui: Nome ou logomarca do apoiador em lista coletiva nas redes sociais e
              certificado digital de apoio social.
            </h4>
          </div>

          <div className="card">
            <h2>AMIGA</h2>
            <h3>R$300,00 (Mensal)</h3>
            <hr />
            <h4>
              Apoio à manutenção administrativa e materiais lúdicos para as sessões de
              Equoterapia.
            </h4>
            <hr />
            <h4>
              Inclui: Nome ou logomarca nas redes sociais e certificado de apoio social.
            </h4>
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

export default PageC
