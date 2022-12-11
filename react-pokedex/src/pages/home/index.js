import React, { useEffect , useState} from 'react'
import axios from 'axios'

import { PokeContainer, Container } from './styles'

import { Header } from '../../components/Header'
import { PokemonCard } from '../../components/PokemonCard'


const Home = () => {
  
  useEffect(() => {
    getPokemons();
  }, [])
  
  const [pokemons, setPokemons] = useState([])
  
  const getPokemons = () => {
    var limit = 50
    var endpoints = []
    for (var i = 1; i <= limit; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    
    var response = axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setPokemons(res))
    .catch((err) => console.log(err))
  }
  

  
  return (
    <Container>
      <Header/>
      <PokeContainer>
        {pokemons.map((pokemon, key) => (
          <PokemonCard key={key} name={pokemon.data.name} id={pokemon.data.id} avatar={pokemon.data.sprites.other.dream_world.front_default}/>
        ))}
      </PokeContainer>
    </Container>
  )
}

export { Home }
