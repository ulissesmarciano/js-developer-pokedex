import React from 'react'

import { Container, MovesContainer } from './styles'

const MovesSection = () => {
  return (
    <Container>
      <MovesContainer>
        <ul>
          <li>Tackle</li>
          <li>Tail Whip</li>
          <li>Bite</li>
          <li>Rapid Spin</li>
          <li>Withdraw</li>
        </ul>
      </MovesContainer>
    </Container>
  )
}

export { MovesSection }