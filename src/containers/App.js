import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemons    : [],
			searchField : ''
		};
	}

	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	};

	componentDidMount() {
		fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
			.then(response => response.json())
			.then(poke => this.setState({ pokemons: poke['pokemon'] }));
	}

	render() {
		const { pokemons, searchField } = this.state;
		const filteredPokemons = pokemons.filter(pokemon =>
			pokemon.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return !pokemons.length ? (
			<div className='tc'>
				<h1 className='f-subheadline lh-title'>Loading</h1>
			</div>
		) : (
			<div className='tc'>
				<h1 className='f-subheadline lh-title'>Pokedex</h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList pokemons={filteredPokemons} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;
