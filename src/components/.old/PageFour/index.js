import React from 'react'
import Page from '../Page'

import HorizontalWhiteLogo from '../../assets/rincao_logo_hor_white.png'

import './styles.css'

const PageFour = () => {
  return (
    <Page>
      <section className="page-four content">
        <section className="title-section">
          <h2 className="m-0 title-h2">{`Cotas de `}</h2>
          <h1 className="m-0 title-h1">PATROCÍNIO</h1>
        </section>

        <section className="quota-section">
          <section className="quota">
            <h2 className="title-h2">🥉 BRONZE 🥉</h2>
            <h3 className="title-h3">R$400,00 (Mensal)</h3>
            <hr />
            <h4>
              Apoio à manutenção dos cavalos mediadores (ferrageamento, cuidados
              veterinários, higienização e bem-estar).
            </h4>
            <h4 className="m-0">
              Inclui: Nome ou logomarca nas redes sociais, banner fixo no local e
              certificado de apoio social.
            </h4>
          </section>

          <section className="quota">
            <h2 className="title-h2">🥈 PRATA 🥈</h2>
            <h3 className="title-h3">R$400,00 (Mensal)</h3>
            <hr />
            <h4>
              Dois padrinhos contribuem para garantir um mês completo de atendimento para
              um praticante de Equoterapia.
            </h4>
            <h4 className="m-0">
              Inclui: Nome ou logomarca nas redes sociais, certificado de apoio social,
              banner fixo no local e relatório a cada 12 atendimentos com fotos
              institucionais.
            </h4>
            <h4 className="final-paragraph">Apadrinhamento compartilhado</h4>
          </section>

          <section className="quota">
            <h2 className="title-h2">🥇 OURO 🥇</h2>
            <h3 className="title-h3">R$800,00 (Mensal)</h3>
            <hr />
            <h4>Patrocine 4 sessões mensais de Equoterapia para um praticante.</h4>
            <h4 className="m-0">
              Inclui: Nome ou logomarca nas redes sociais, certificado de apoio social,
              banner fixo no local e relatório a cada 12 atendimentos com fotos
              institucionais.
            </h4>
            <h4 className="final-paragraph">Apadrinhamento de um praticante</h4>
          </section>
        </section>

        <section className="observations">
          <h4 className="m-0 observation">
            * As cotas PRATA e OURO descritas acima têm duração mínima de SEIS MESES,
            podendo ser renovadas ou não. Esse período segue as normas da ANDE-Brasil, que
            orienta que a Equoterapia seja um tratamento progressivo. O mínimo de seis
            meses (24 atendimentos) é necessário para que o praticante crie vínculo com o
            cavalo e alcance benefícios reais no desenvolvimento físico, emocional e
            cognitivo.
          </h4>
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

export default PageFour
