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
  return `<section class="content ${pokemon.type}">
            <div class="header">
                  <a class="link" href="./index.html">
                      <img src="./assets/images/back-button.png" alt="voltar">
                  </a>
                  <a class="link" href="#">
                      <img src="./assets/images/like-button.png" alt="gostar">
                  </a>
            </div>
            <div class="titles">
              <div>
                  <h1>${pokemon.name}</h1>
                  <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  </ol>
              </div>
              <p class="number">${pokemon.number}</p>
            </div>
            <div class="imageContainer">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.number}.svg" alt="${pokemon.name}">
            </div>
            <div class="itens">
              <div class="itensMenu">
                  <h4>About</h4>
              </div>
              <div class="itensContainer">
                  <ol class="itemPoint">
                      
                      <li>Height</li>
                      <li>Weight</li>
                      <li>Abilities</li>
                  </ol>
                  <ol class="itemContent">
                      
                      <li>${pokemon.height}(${pokemon.heightmt}cm)</li>
                      <li>${pokemon.weight}lbs (${pokemon.weightkg}kg)</li>
                        ${pokemon.abilities.map((ability) => `<li>${ability}</li>`).join('')}
                  </ol>
              </div>
            </div>
          </section>`;
}

main();