import React from 'react'

import HorizontalWhiteLogo from '../../../../assets/logos/rincao_logo_hor_white.png'
import BazanaLogo from '../../../../assets/logos/bazana_logo.png'

import './styles.css'

const PageD = () => (
  <section className="page d">
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
            <h2>🥉 BRONZE 🥉</h2>
            <h3>R$400,00 (Mensal)</h3>
            <hr />
            <h4>
              Apoio à manutenção dos cavalos mediadores (ferrageamento, cuidados
              veterinários, higienização e bem-estar).
            </h4>
            <hr />
            <h4>
              Inclui: Nome ou logomarca nas redes sociais, banner fixo no local e
              certificado de apoio social.
            </h4>
          </div>

          <div className="card">
            <h2>🥈 PRATA 🥈</h2>
            <h3>R$400,00 (Mensal)</h3>
            <hr />
            <h4>
              Dois padrinhos contribuem para garantir um mês completo de atendimento para
              um praticante de Equoterapia.
            </h4>
            <hr />
            <h4>
              Inclui: Nome ou logomarca nas redes sociais, certificado de apoio social,
              banner fixo no local e relatório a cada 12 atendimentos com fotos
              institucionais.
            </h4>
            <h5>APADRINHAMENTO COMPARTILHADO</h5>
          </div>

          <div className="card">
            <h2>🥇 OURO 🥇</h2>
            <h3>R$800,00 (Mensal)</h3>
            <hr />
            <h4>Patrocine 4 sessões mensais de Equoterapia para um praticante.</h4>
            <hr />
            <h4>
              Inclui: Nome ou logomarca nas redes sociais, certificado de apoio social,
              banner fixo no local e relatório a cada 12 atendimentos com fotos
              institucionais.
            </h4>
            <h5>APADRINHAMENTO DE UM PRATICANTE</h5>
          </div>
        </div>
      </div>

      <div className="description-wrapper">
        <div className="description">
          <h4>
            * As cotas PRATA e OURO descritas acima têm duração mínima de SEIS MESES,
            podendo ser renovadas ou não. Esse período segue as normas da ANDE-Brasil, que
            orienta que a Equoterapia seja um tratamento progressivo. O mínimo de seis
            meses (24 atendimentos) é necessário para que o praticante crie vínculo com o
            cavalo e alcance benefícios reais no desenvolvimento físico, emocional e
            cognitivo.
          </h4>
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
            src={HorizontalWhiteLogo}
            alt="Logo Horizontal Branco do Rincão da Inclusão"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
)

export default PageD
