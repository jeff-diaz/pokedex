import axios from 'axios';

export async function fetchSinglePokemon(nameOrId) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        let { data } = response;

        const responseDescription = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`);
        const { flavor_text_entries } = await responseDescription.json();
        const description = flavor_text_entries[0].flavor_text;

        return { ...data, description };
    } catch (error) {
        console.error(error);
    }
}

export async function fetchAllPokemon(gen) {

    let offset = 0;
    let limit = 152;
    if (gen === '1') { offset = 0; limit = 151 }
    else if (gen === '2') { offset = 151; limit = 99 }
    else if (gen === '3') { offset = 251; limit = 99 }
    else if (gen === '4') { offset = 386; limit = 108 }
    else if (gen === '5') { offset = 494; limit = 156 }
    else if (gen === '6') { offset = 649; limit = 72 }
    else if (gen === '7') { offset = 721; limit = 90 }
    else if (gen === '8') { offset = 809; limit = 110 }
    else if (gen === '9') { offset = 920; limit = 100 }

    let pokemonArray = [];

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);

    const { results } = await response.json();


    for (const pokemon of results) {
        pokemonArray = [...pokemonArray, pokemon.name];
    }

    return pokemonArray;
}


export async function fetchAllNames() {
    let offset = 0;
    let limit = 1013;
    let pokemonArray = [];

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    const { results } = await response.json();

    for (const pokemon of results) {
        pokemonArray = [...pokemonArray, pokemon.name];
    }

    return pokemonArray;
}

export function getPokemonImage(index) {
    const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
    return imageURL;
}

export async function convertNameToId(pokemonName) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const { id } = response.data;
        return id;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchEvolutionChain(index) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${index}`);
        const { data } = response;

        const evolutionURL = data.evolution_chain.url;

        const evolutionChainURL = await axios.get(evolutionURL);
        const evolutionChain = evolutionChainURL?.data?.chain

        let evolutionObject = {
        };

        const first = evolutionChain.species.name
        const second = evolutionChain?.evolves_to?.[0]?.species.name
        const secondLevelEvolution = evolutionChain?.evolves_to?.[0]?.evolution_details[0].min_level;
        const third = evolutionChain?.evolves_to?.[0]?.evolves_to?.[0]?.species.name
        const thirdLevelEvolution = evolutionChain?.evolves_to?.[0]?.evolves_to?.[0]?.evolution_details[0].min_level;

        if (first) {
            const firstId = await convertNameToId(first);
            evolutionObject = {
                ...evolutionObject,
                firstId: firstId
            }
        }
        if (second) {
            const secondId = await convertNameToId(second);
            evolutionObject = {
                ...evolutionObject,
                secondId: secondId,
                secondLevel: secondLevelEvolution
            }
        }
        if (third) {
            const thirdId = await convertNameToId(third);
            evolutionObject = evolutionObject = {
                ...evolutionObject,
                thirdId: thirdId,
                thirdLevel: thirdLevelEvolution
            }
        } else {
            evolutionObject = { ...evolutionObject }
        }
        console.log(evolutionObject);
        return evolutionObject;


    } catch (error) {
        console.error(error);
    }
}


export function convertTypeToHex(type) {
    if (type === 'water') return "#539AE2";
    if (type === 'ice') return "#55c3ec";
    if (type === 'bug') return `#94BC4A`;
    if (type === 'grass') return `#71C558`;
    if (type === 'electric') return `#ffd726`;
    if (type === 'fire') return "#EA7A3C";
    if (type === 'fairy') return `#f7a3b2`;
    if (type === 'ghost') return `#846AB6`;
    if (type === 'psychic') return `#a854a8`;
    if (type === 'poison') return `#B468B7`;
    if (type === 'ground') return `#CC9F4F`;
    if (type === 'rock') return `#B2A061`;
    if (type === 'normal') return `#AAB09F`;
    if (type === 'flying') return `#7DA6DE`;
    if (type === 'dragon') return `#6A7BAF`;
    if (type === 'dark') return `#736C75`;
    if (type === 'fighting') return `#CB5F48`;
    if (type === 'steel') return `#89A1B0`;
}


export async function getDescription(id) {
    const responseDescription = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const { flavor_text_entries } = await responseDescription.json();
    const description = flavor_text_entries[0].flavor_text;
}