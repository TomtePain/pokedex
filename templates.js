function PokemonOverviewCardsGeneratetHTMLTemplate(i) {
    return `
        <div id="pokemon-overview-cards${i}" class="pokemon-overview-cards" onclick="showDetailsOfPokemon(${i})">
            <h2 class="pokemon-ov-card-name" id="pokemon-ov-card-name${i}">${showPokemon[i]['name']}</h2>
            <div class="pokemon-ov-card-id" id="pokemon-ov-card-id${i}">${idOfPokemon.toString().padStart(3, '0')}</div>
            <div class="pokemon-ov-card-typ" id="pokemon-ov-card-typ${i}"></div>
        
            <img class="pokemon-ov-card-img" id="pokemon-ov-card-img${i}" src="${altImgOfPokemon}">
        </div>
        <div id="pseudo-bg${i}" class="d-none test" onclick="showPokedexOverview(${i})"></div>`;
}

function DetailsOfPokemonGenerateHTMLTemplate(i) {
    const element = result[i];
    return `
    <div class="poke-card d-none" id="poke-cards${i}">
        <div class="icon-top">
            <img id="arrow-back${i}" onclick="showPokedexOverview(${i})" src="img/arrow-white.ico">
            <div class="type" id="type${i}"></div>
        </div>
        <h2 class="pokename" id="pokename${i}">${showPokemon[i]['name']}</h2>
        <span class="poke-id" id="poke-id${i}">#${idOfPokemon.toString().padStart(3, '0')}</span>
        <div class="img-container"><img class="img" id="img${i}" src="${altImgOfPokemon}"></div>
        <div class="bottom-container">
            <ul>
                <li id="about${i}" onclick="showAbout(${i})">About</li>
                <li id="base-stats${i}" onclick="showBaseStats(${i})">Base Stats</li>
                <li id="moves${i}" onclick="showMoves(${i})">Moves</li>
            </ul>
            <div class="pseudo-line"></div>

            <div class="show-about " id="show-about${i}">
                <table>
                    <tr>
                        <td>Species</td>
                        <td id="species${i}" class="c-black">${species}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td id="height${i}" class="c-black">${height + '"' + `(${height * 2.54}cm)`}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td id="weight${i}" class="c-black">${weight + ' lbs ' + ` (${Math.round(weight / 2.205)} Kg) `}</td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td id="abilities${i}" class="c-black">${firstability}</td>
                    </tr>
                </table>
            </div>

            <div class="show-base d-none" id="show-base${i}">
                <table>
                    <tr>
                        <td>HP</td>
                        <td id="hp${i}" class="c-black">${hpOfPokemon}</td>
                        <td><progress id="progress-hp${i}" max="100" value="${hpOfPokemon}"></progress></td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td id="attack${i}" class="c-black">${attackOfPokemon}</td>
                        <td><progress id="progress-atk${i}" max="100" value="${attackOfPokemon}"></progress></td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td id="def${i}" class="c-black">${defenseOfPokemon}</td>
                        <td><progress id="progress-def${i}" max="100" value="${defenseOfPokemon}"></progress></td>
                    </tr>
                    <tr>
                        <td>Sp.Atk</td>
                        <td id="sp-a${i}" class="c-black">${spAOfPokemon}</td>
                        <td><progress id="progress-sp-atk${i}" max="100" value="${spAOfPokemon}"></progress></td>
                    </tr>
                    <tr>
                        <td>Sp.Def</td>
                        <td id="sp-d${i}" class="c-black">${spDOfPokemon}</td>
                        <td><progress id="progress-sp-def${i}" max="100" value="${spAOfPokemon}"></progress></td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td id="speed${i}" class="c-black">${speedOfPokemon}</td>
                        <td><progress id="progress-speed${i}" max="100" value="${speedOfPokemon}"></progress></td>
                    </tr>
                </table>
            </div>

            <div class="show-moves d-none" id="show-moves${i}"></div>
        </div>`
}

function PokemonOverviewCardsGeneratetHTMLTemplateForSearch(i) {
    let pokemon = showPokemon[i];
    return `
    <div id="pokemon-overview-cards${i}" class="pokemon-overview-cards" onclick="showDetailsOfPokemon(${i})">
        <h2 class="pokemon-ov-card-name" id="pokemon-ov-card-name${i}">${pokemon['name']}</h2>
        <div class="pokemon-ov-card-id" id="pokemon-ov-card-id${i}">#${pokemon['id'].toString().padStart(3, '0')}</div>
        <div class="pokemon-ov-card-typ" id="pokemon-ov-card-typ${i}"></div>
        <img class="pokemon-ov-card-img" id="pokemon-ov-card-img${i}" src="${pokemon['sprites']['other']['official-artwork']['front_default']}">
    </div>
    <div id="pseudo-bg${i}" class="d-none test" onclick="showPokedexOverview(${i})"></div>`;
}