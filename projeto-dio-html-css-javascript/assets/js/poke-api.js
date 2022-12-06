
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

function getPokemonDetails(id){
    let pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"+id;
    return fetch(pokemonUrl).then((response) => response.json())
    .then(convertPokeApiDetailToPokemonDetail)
}


function convertPokeApiDetailToPokemonDetail(pokeDetail) {
    const pokemon = new PokemonDetail();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    pokemon.order = pokeDetail.order;
    pokemon.weight = pokeDetail.weight;
    pokemon.weightkg = (pokemon.weight / 2.046).toFixed(1);
    pokemon.height = pokeDetail.height;
    pokemon.heightmt = (pokemon.height / 3.2808).toFixed(2)
    pokemon.order = pokeDetail.order;
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photos = Object.values(pokeDetail.sprites);

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
    const [ability] = abilities;

    pokemon.abilities = abilities;
    pokemon.ability = ability;

    return pokemon;
}