const principal = document.getElementById("principal");

function main(){
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  html = "";
  getPokemonDetails(params.pokemonId).then(pokemon=>{
    console.log(pokemon);
    html += construct(pokemon);
    
    principal.innerHTML += html;
  });
}

function construct(pokemon){
  return `<div>
  <img src="${pokemon.photos[8].dream_world.front_default}" alt="${pokemon.name}">
    <h1>${pokemon.name}</h1>
    <ol class="types">
      ${pokemon.types.map((type) => `<li class="type-detail ${type}">${type}</li>`).join('')}
    </ol>
    <h3>Number: ${pokemon.number}</h3>
    <h3>Base Experience: ${pokemon.baseExperience}</h3>
    <h3>Height: ${pokemon.height}</h3>
    <h3>Weight: ${pokemon.weight}</h3>
    <h3>Order: ${pokemon.order}</h3>
    <h3>Default: ${pokemon.isDefault}</h3>
    
  </div>`;
}

main();