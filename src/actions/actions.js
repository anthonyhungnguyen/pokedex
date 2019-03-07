import {
	CHANGE_SEARCH_FIELD,
	REQUEST_POKEMONS_PENDING,
	REQUEST_POKEMONS_SUCCESS,
	REQUEST_POKEMONS_FAILED
} from '../constants/constants';

export const setSearchField = text => ({
	type    : CHANGE_SEARCH_FIELD,
	payload : text
});

export const requestPokemons = () => dispatch => {
	dispatch({ type: REQUEST_POKEMONS_PENDING });
	fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_POKEMONS_SUCCESS, payload: data['pokemon'] }))
		.catch(error => dispatch({ type: REQUEST_POKEMONS_FAILED, payload: error }));
};
