import React from 'react'
import Page from '../Page'

import HorizontalColoredLogo from '../../assets/rincao_logo_hor_colored.png'

import './styles.css'

const PageTwo = () => {
  return (
    <Page>
      <section className="page-two content">
        <section className="description-section">
          <section className="column">
            <h1 className="m-0 title">EQUOTERAPIA</h1>
            <h4 className="paragraph">
              A Equoterapia é um método que utiliza o cavalo como agente terapêutico,
              promovendo o desenvolvimento físico, emocional, cognitivo e social de
              crianças, jovens e adultos.
            </h4>
            <h4 className="paragraph">
              Durante as sessões, o movimento tridimensional do cavalo, com apenas 5% de
              diferença da marcha humana, estimula o corpo do praticante, ajudando no
              equilíbrio, postura, coordenação motora e tônus muscular. Ao mesmo tempo, o
              contato com o animal favorece a autoconfiança, a atenção, a comunicação, a
              autoestima e o vínculo.
            </h4>
            <h4 className="paragraph">
              A Equoterapia é indicada para pessoas com limitações físicas ocasionadas por
              transtornos neurológicos ou não, transtornos do desenvolvimento,
              dificuldades de aprendizagem e questões emocionais.
            </h4>
          </section>

          <section className="column">
            <h1 className="m-0 title">QUEM SOMOS</h1>
            <h4 className="paragraph">
              O Projeto Rincão da Inclusão, apoiado pelo Sr. Adair Carlos Bazana e
              idealizado e conduzido pela psicóloga e equoterapeuta Luiza Ribeiro
              Stacowski, nasceu de um sonho que hoje se transforma em realidade. Trata-se
              de um trabalho comprometido com a inclusão social, que faz da Equoterapia e
              da Equitação Gaúcha ferramentas terapêuticas, unindo cuidado, ciência e
              cultura.
            </h4>
            <h4 className="paragraph">
              Nossas atividades equoterápicas são realizadas por uma equipe
              multiprofissional, formada por fisioterapeuta, educador físico, profissional
              de equitação habilitada em Equoterapia e psicólogas, garantindo um
              atendimento qualificado, ético e interdisciplinar. Atualmente, dois cavalos
              integram esse trabalho: Astrogildo e Habanero, parceiros fundamentais no
              desenvolvimento dos praticantes.
            </h4>
            <h4 className="paragraph">
              Cada criança atendida realiza uma sessão semanal de Equoterapia. No entanto,
              existe fila de espera para novos atendimentos, já que muitas famílias não
              possuem condições financeiras de arcar com os custos do tratamento. O
              projeto atua de forma regularizada, seguindo as diretrizes da Associação
              Nacional de Equoterapia (ANDE-BRASIL), com profissionais capacitados e
              custos administrativos obrigatórios, assegurando a qualidade e a
              continuidade dos atendimentos.
            </h4>
          </section>
        </section>

        <section className="watermark">
          <img
            src={HorizontalColoredLogo}
            alt="Logo Horizontal Colorido do Rincão da Inclusão"
          />
        </section>
      </section>
    </Page>
  )
}

export default PageTwo
