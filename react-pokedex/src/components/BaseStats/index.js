import React from 'react'

import { ProgressBar } from '../ProgressBar'

import { Container, ItemLeft, SkillsOrientation, ItemRight, DefenceContainer } from './styles'

const BaseStats = () => {
  return (
    <Container>
      <SkillsOrientation>
        <ItemLeft>
          <li>HP</li>
          <li>Attack</li>
          <li>Defence</li>
          <li>Sp. Atk</li>
          <li>Sp. Def</li>
          <li>Speed</li>
          <li>Total</li>
        </ItemLeft>
        <ItemRight>
          <li><ProgressBar progress={`40`} /></li>
          <li><ProgressBar progress={`60`}/></li>
          <li><ProgressBar progress={`70`}/></li>
          <li><ProgressBar progress={`20`}/></li>
          <li><ProgressBar progress={`45`}/></li>
          <li><ProgressBar progress={`90`}/></li>
          <li><ProgressBar progress={`85`}/></li>
        </ItemRight>
      </SkillsOrientation>
      <DefenceContainer>
        <h2>Type defences</h2>
        <p>The effectiveness of each type on Charmander</p>
      </DefenceContainer>
    </Container>
  )
}

export { BaseStats }