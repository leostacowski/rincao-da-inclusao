import React from 'react'

import Container from './components/Container'
import PageA from './components/PageA'
import PageB from './components/PageB'
import PageC from './components/PageC'
import PageD from './components/PageD'
import PageE from './components/PageE'

import './styles.css'

const Sponsorships = () => (
  <main>
    <Container>
      <PageA />
    </Container>
    <Container>
      <PageB />
    </Container>
    <Container>
      <PageC />
    </Container>
    <Container>
      <PageD />
    </Container>
    <Container>
      <PageE />
    </Container>
  </main>
)

export default Sponsorships
