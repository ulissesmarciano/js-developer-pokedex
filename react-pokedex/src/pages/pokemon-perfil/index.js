import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { PokeTablist } from '../../components/PokemonTablist'

import { Container, FirstSection, HeadContainer, ImageContainer, TitleContainer, CurveSection, SecondSection, SkillsContainer, TypesContainer } from './styles'




const PokemonPerfil = () => {
  return (
    <Container>
      <FirstSection>
        <HeadContainer>
          <Link to='/'>
            <FiChevronLeft/>
          </Link>
        </HeadContainer>
        <TitleContainer>
          <h3>Bulbasaur</h3>
          <p>#001</p>
        </TitleContainer>
        <ImageContainer>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='Foto do Pokémon' />
        </ImageContainer>
      </FirstSection>
      <CurveSection>
          <svg width="500"  viewBox="0 0 500 80" preserveAspectRatio="none">
          <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" />
          </svg>
      </CurveSection>
      <SecondSection>
        <TypesContainer>
          <ul>
            <li>Grass</li>
            <li>Poison</li>
          </ul>
        </TypesContainer>
        <SkillsContainer>
          <PokeTablist/>
        </SkillsContainer>
      </SecondSection>
    </Container>
  )
}

export { PokemonPerfil }