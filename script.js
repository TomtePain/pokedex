let showPokemon = [];
let currentPokemon;
let result;
let allPokemon;
let type;
let secondtype;
let imgOfPokemon;
let altImgOfPokemon;
let idOfPokemon;
let hpOfPokemon;
let attackOfPokemon;
let defenseOfPokemon;
let spAOfPokemon;
let spDOfPokemon;
let speedOfPokemon;
let species;
let height;
let weight;
let firstability;
let moves;
let offset = 20;
let start = 0;




async function loadPokedex() {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500`; 
    let response = await fetch(url);
    allPokemon = await response.json();
    result = allPokemon['results'];
    forLoopForLoadPokedex();
}


async function forLoopForLoadPokedex() {
    for (let i = start; i < offset; i++) {
        const element = result[i];
        let newUrl = element['url'];
        let newResponse = await fetch(newUrl);
        currentPokemon = await newResponse.json();
        showPokemon.push(currentPokemon);
        
        loadPokedexVariables(i);
        showBaseStatsVariablen(i);
        renderPokemonInfo(i);
        renderPokemonOverviewCards(i);
        forLoopForType(i);
        forLoopForMoves(i);
        ifRequestForBackground(i);
    }
}

function loadMore() {
    start = offset;
    offset += 20;
    forLoopForLoadPokedex(); 
}

function forLoopForType(i) {
    for (let j = 0; j < type.length; j++) {
        const typen = type[j]['type']['name'];
        document.getElementById(`pokemon-ov-card-typ${i}`).innerHTML += `<div class="pokemon-ov-card-typen">${typen}</div>`;
        document.getElementById(`type${i}`).innerHTML += `<div class="typen">${typen}</div>`;
    }
}

function forLoopForMoves(i) {
    for (let k = 0; k < moves.length; k++) {
        const mov = moves[k]['move']['name'];
        document.getElementById(`show-moves${i}`).innerHTML += `<div class="move">${mov}</div>`;
    }
}

function loadPokedexVariables(i) {
    type = showPokemon[i]['types']//['0']['type']['name'];
    types = showPokemon[i]['types']['0']['type']['name'];
    imgOfPokemon = showPokemon[i]['sprites']['front_default'];
    altImgOfPokemon = showPokemon[i]['sprites']['other']['official-artwork']['front_default'];
    idOfPokemon = showPokemon[i]['id'];
    species = showPokemon[i]['species']['name'];
    height = showPokemon[i]['height'];
    weight = showPokemon[i]['weight'];
    firstability = showPokemon[i]['abilities'][0]['ability']['name'];
    moves = showPokemon[i]['moves'];
}

function renderPokemonInfo(i) {
    document.getElementById('poke-card-container').innerHTML += DetailsOfPokemonGenerateHTMLTemplate(i);
}

function renderPokemonOverviewCards(i) {
    document.getElementById('pokedex-overview').innerHTML += PokemonOverviewCardsGeneratetHTMLTemplate(i);

    document.getElementById(`pokemon-ov-card-name${i}`).innerHTML = showPokemon[i]['name'];
    document.getElementById(`pokemon-ov-card-img${i}`).src = altImgOfPokemon;
    document.getElementById(`pokemon-ov-card-id${i}`).innerHTML = '#' + idOfPokemon.toString().padStart(3, '0');
}

function showDetailsOfPokemon(i) {
    renderPokemonInfo(i);
    document.getElementById(`pseudo-bg${i}`).classList.remove('d-none');
    document.getElementById(`poke-card-container`).classList.remove('d-none');
    document.getElementById(`poke-cards${i}`).classList.remove('d-none');
}

function showPokedexOverview(i) {
    document.getElementById(`pokedex-overview`).classList.remove('d-none');
    document.getElementById(`poke-card-container`).classList.add('d-none');
    document.getElementById(`poke-cards${i}`).classList.add('d-none');
    document.getElementById(`pseudo-bg${i}`).classList.add('d-none');
}


// ABOUT \\

function showAbout(i) {
    showAboutUnderline(i)
    showAboutDisplay(i)
}

function showAboutUnderline(i) {
    document.getElementById(`about${i}`).classList.add('underline');
    document.getElementById(`moves${i}`).classList.remove('underline');
    document.getElementById(`base-stats${i}`).classList.remove('underline');
}
function showAboutDisplay(i) {
    document.getElementById(`show-about${i}`).classList.remove('d-none');
    document.getElementById(`show-base${i}`).classList.add('d-none');
    document.getElementById(`show-moves${i}`).classList.add('d-none');
}


// Base Stats \\

function showBaseStats(i) {
    showBaseStatsChangeUnderline(i);
    showBaseStatsChangeDisplay(i);
}

function showBaseStatsVariablen(i) {
    hpOfPokemon = showPokemon[i]['stats'][0]['base_stat'];
    attackOfPokemon = showPokemon[i]['stats'][1]['base_stat'];
    defenseOfPokemon = showPokemon[i]['stats'][2]['base_stat'];
    spAOfPokemon = showPokemon[i]['stats'][3]['base_stat'];
    spDOfPokemon = showPokemon[i]['stats'][4]['base_stat'];
    speedOfPokemon = showPokemon[i]['stats'][5]['base_stat'];
}
function showBaseStatsChangeUnderline(i) {
    document.getElementById(`base-stats${i}`).classList.add('underline');
    document.getElementById(`about${i}`).classList.remove('underline');
    document.getElementById(`moves${i}`).classList.remove('underline');
}
function showBaseStatsChangeDisplay(i) {
    document.getElementById(`show-base${i}`).classList.remove('d-none');
    document.getElementById(`show-about${i}`).classList.add('d-none');
    document.getElementById(`show-moves${i}`).classList.add('d-none');
}


// MOVES \\

function showMoves(i) {
    showMovesUnderline(i);
    showMovesDisplay(i);
}
function showMovesUnderline(i) {
    document.getElementById(`moves${i}`).classList.add('underline');
    document.getElementById(`about${i}`).classList.remove('underline');
    document.getElementById(`base-stats${i}`).classList.remove('underline');
}
function showMovesDisplay(i) {
    document.getElementById(`show-moves${i}`).classList.remove('d-none');
    document.getElementById(`show-about${i}`).classList.add('d-none');
    document.getElementById(`show-base${i}`).classList.add('d-none');
}


// IF-REQUESTS-FOR-BACKGROUNDS \\

function ifRequestForBackground(i) {
    let pokemonOvCards =  document.getElementById(`pokemon-overview-cards${i}`); 
    let pokeCards = document.getElementById(`poke-cards${i}`);
    pokemonOvCards.classList.add(types) 
    pokeCards.classList.add(types)
}



function filterPokemon() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let container = document.getElementById('pokedex-overview');
    container.innerHTML = '';
    for (let i = 0; i < showPokemon.length; i++) {
        let pokemon = showPokemon[i];
        if(pokemon['name'].toLowerCase().includes(search)) {
            container.innerHTML += PokemonOverviewCardsGeneratetHTMLTemplateForSearch(i);            
            loadPokedexVariables(i);
            forLoopForTypeSearch(i)
            ifRequestForBackground(i);
        }
       }
    
}
function forLoopForTypeSearch(i) {
    for (let j = 0; j < type.length; j++) {
        const typen = type[j]['type']['name'];
        document.getElementById(`pokemon-ov-card-typ${i}`).innerHTML += `<div class="pokemon-ov-card-typen">${typen}</div>`;
    }
}