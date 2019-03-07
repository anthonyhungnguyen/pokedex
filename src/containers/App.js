import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { connect } from 'react-redux';
import { setSearchField, requestPokemons } from '../actions/actions';

const mapStateToProps = state => {
	return {
		searchField : state.searchPokemons.searchField,
		pokemons    : state.requestPokemons.pokemons,
		isPending   : state.requestPokemons.isPending,
		error       : state.requestPokemons.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange    : event => dispatch(setSearchField(event.target.value)),
		onRequestPokemons : () => dispatch(requestPokemons())
	};
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemons : []
		};
	}

	componentDidMount() {
		this.props.onRequestPokemons();
	}

	render() {
		const { searchField, onSearchChange, pokemons, isPending } = this.props;
		const filteredPokemons = pokemons.filter(pokemon =>
			pokemon.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return isPending ? (
			<div className='tc'>
				<h1 className='f-subheadline lh-title'>Loading</h1>
			</div>
		) : (
			<div className='tc'>
				<h1 className='f-subheadline lh-title'>Pokedex</h1>
				<SearchBox onSearchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList pokemons={filteredPokemons} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
