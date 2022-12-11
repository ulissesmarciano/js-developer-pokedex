import React from 'react'

import { Container, SkillsOrientation, ItemLeft, ItemRight } from './styles'

const AboutSection = () => {
  return (
    <Container>
      <SkillsOrientation>
        <ItemLeft>
          <li>Species</li>
          <li>Height</li>
          <li>Weight</li>
          <li>Abilities</li>
        </ItemLeft>
        <ItemRight>
          <li>Seed</li>
          <li>2'3.6* (0.70cm)</li>
          <li>15.2 lbs(6.9 kg)</li>
          <li>Overgrow, Chlorophil</li>
        </ItemRight>
      </SkillsOrientation>

      <h2>Breeding</h2>
      <SkillsOrientation>
        <ItemLeft>
          <li>Gender</li>
          <li>Egg Group</li>
          <li>Egg Cycle</li>
        </ItemLeft>
        <ItemRight>
          <li>male(icon) female(icon)</li>
          <li>Monster</li>
          <li>Grass</li>
        </ItemRight>
      </SkillsOrientation>
    </Container>
  )
}

export { AboutSection }