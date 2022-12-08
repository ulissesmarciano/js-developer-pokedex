import React from 'react'

import { Link } from 'react-router-dom'

import { Container, TitleContainer, ImageContainer, InfoContainer, TypesContainer, IdContainer } from './styles'

const  Pokemon = () => {
  return (
    <Link to="/Perfil">
    <Container>
        <TitleContainer>
            <h3>Bulbassaur</h3>
        </TitleContainer>
        <ImageContainer>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='Foto do Pokémon' />
        </ImageContainer>
        <InfoContainer>
            <TypesContainer>
                <ul>
                    <li>Venom</li>
                    <li>Leaf</li>
                </ul>
            </TypesContainer>
            <IdContainer>
                <p>#001</p>
            </IdContainer>
        </InfoContainer>
    </Container>
    </Link>
  )
}

export { Pokemon }
