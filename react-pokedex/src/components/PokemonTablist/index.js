import React from 'react'
import { AboutSection } from '../AboutSection'
import { BaseStats } from '../BaseStats'
import { MovesSection } from '../MovesSection'

import {Container, WrapperTab, WrapperTabList, WrapperTabs, DescriptionContainer, WrapperTabPanel} from './styles'


const PokeTablist = () => {
  return (
    <Container>
      <WrapperTabs>
        <WrapperTabList>
          <WrapperTab>About</WrapperTab><span/>
          <WrapperTab>Base Stats</WrapperTab><span/>
          <WrapperTab>Moves</WrapperTab>
        </WrapperTabList>
        <DescriptionContainer>
          <WrapperTabPanel>
            <AboutSection/>
          </WrapperTabPanel>
          <WrapperTabPanel>
            <BaseStats/>
          </WrapperTabPanel>
          <WrapperTabPanel>
            <MovesSection/>
          </WrapperTabPanel>
        </DescriptionContainer>
  </WrapperTabs>
    </Container>
  )
}

export { PokeTablist }