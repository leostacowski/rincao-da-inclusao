import React from 'react'
import Page from '../Page'

import HorizontalWhiteLogo from '../../assets/rincao_logo_hor_white.png'

import './styles.css'

const PageThree = () => {
  return (
    <Page>
      <section className="page-three content">
        <section className="title-section">
          <h2 className="m-0 title-h2">{`Cotas de `}</h2>
          <h1 className="m-0 title-h1">PATROCÍNIO</h1>
        </section>

        <section className="quota-section">
          <section className="quota">
            <h2 className="title-h2">SOLIDÁRIA</h2>
            <h3 className="title-h3">R$100,00 (Mensal)</h3>
            <hr />
            <h4 className="paragraph">
              Apoio à manutenção básica do projeto (materiais de escritório e
              higienização).
            </h4>
            <h4 className="m-0 paragraph">
              Inclui: Certificado digital de apoio social.
            </h4>
          </section>

          <section className="quota">
            <h2 className="title-h2">APOIO</h2>
            <h3 className="title-h3">R$200,00 (Mensal)</h3>
            <hr />
            <h4 className="paragraph">
              Contribuição para a manutenção dos arreios e materiais de segurança da
              Equoterapia.
            </h4>
            <h4 className="m-0 paragraph">
              Inclui: Nome ou logomarca do apoiador em lista coletiva nas redes sociais e
              certificado digital de apoio social.
            </h4>
          </section>

          <section className="quota">
            <h2 className="title-h2">AMIGA</h2>
            <h3 className="title-h3">R$300,00 (Mensal)</h3>
            <hr />
            <h4 className="paragraph">
              Apoio à manutenção administrativa e materiais lúdicos para as sessões de
              Equoterapia.
            </h4>
            <h4 className="m-0 paragraph">
              Inclui: Nome ou logomarca nas redes sociais e certificado de apoio social.
            </h4>
          </section>
        </section>

        <section className="watermark">
          <img
            src={HorizontalWhiteLogo}
            alt="Logo Horizontal Branco do Rincão da Inclusão"
          />
        </section>
      </section>
    </Page>
  )
}

export default PageThree
