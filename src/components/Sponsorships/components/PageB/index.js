import React from 'react'

import HorizontalWhiteLogo from '../../../../assets/logos/rincao_logo_hor_white.png'
import BazanaLogo from '../../../../assets/logos/bazana_logo.png'

import './styles.css'

const PageB = () => (
  <section className="page b">
    <div className="content-wrapper">
      <div className="background-image-wrapper">
        <div className="background-image" />
        <div className="overlay" />
      </div>

      <div className="column-wrapper">
        <div className="column">
          <h1>EQUOTERAPIA</h1>
          <h4>
            A Equoterapia é um método que utiliza o cavalo como agente terapêutico,
            promovendo o desenvolvimento físico, emocional, cognitivo e social de
            crianças, jovens e adultos.
          </h4>
          <h4>
            Durante as sessões, o movimento tridimensional do cavalo, com apenas 5% de
            diferença da marcha humana, estimula o corpo do praticante, ajudando no
            equilíbrio, postura, coordenação motora e tônus muscular. Ao mesmo tempo, o
            contato com o animal favorece a autoconfiança, a atenção, a comunicação, a
            autoestima e o vínculo.
          </h4>
          <h4>
            A Equoterapia é indicada para pessoas com limitações físicas ocasionadas por
            transtornos neurológicos ou não, transtornos do desenvolvimento, dificuldades
            de aprendizagem e questões emocionais.
          </h4>
        </div>

        <div className="column">
          <h1>QUEM SOMOS</h1>
          <h4>
            O Projeto Rincão da Inclusão, apoiado pelo Sr. Adair Carlos Bazana e
            idealizado e conduzido pela psicóloga e equoterapeuta Luiza Ribeiro Stacowski,
            nasceu de um sonho que hoje se transforma em realidade. Trata-se de um
            trabalho comprometido com a inclusão social, que faz da Equoterapia e da
            Equitação Gaúcha ferramentas terapêuticas, unindo cuidado, ciência e cultura.
          </h4>
          <h4>
            Nossas atividades equoterápicas são realizadas por uma equipe
            multiprofissional, formada por fisioterapeuta, educador físico, profissional
            de equitação habilitada em Equoterapia e psicólogas, garantindo um atendimento
            qualificado, ético e interdisciplinar. Atualmente, dois cavalos integram esse
            trabalho: Astrogildo e Habanero, parceiros fundamentais no desenvolvimento dos
            praticantes.
          </h4>
          <h4>
            Cada criança atendida realiza uma sessão semanal de Equoterapia. No entanto,
            existe fila de espera para novos atendimentos, já que muitas famílias não
            possuem condições financeiras de arcar com os custos do tratamento. O projeto
            atua de forma regularizada, seguindo as diretrizes da Associação Nacional de
            Equoterapia (ANDE-BRASIL), com profissionais capacitados e custos
            administrativos obrigatórios, assegurando a qualidade e a continuidade dos
            atendimentos.
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

export default PageB
