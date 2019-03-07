import {
	CHANGE_SEARCH_FIELD,
	REQUEST_POKEMONS_PENDING,
	REQUEST_POKEMONS_SUCCESS,
	REQUEST_POKEMONS_FAILED
} from '../constants/constants';

const initialStateSearch = {
	searchField : ''
};

export const searchPokemons = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchField: action.payload };
		default:
			return state;
	}
};

const initialStateRequest = {
	pokemons  : [],
	isPending : false,
	error     : ''
};

export const requestPokemons = (state = initialStateRequest, action = {}) => {
	switch (action.type) {
		case REQUEST_POKEMONS_PENDING:
			return { ...state, isPending: true };
		case REQUEST_POKEMONS_SUCCESS:
			return { ...state, isPending: false, pokemons: action.payload };
		case REQUEST_POKEMONS_FAILED:
			return { ...state, isPending: false, error: action.payload };
		default:
			return state;
	}
};
