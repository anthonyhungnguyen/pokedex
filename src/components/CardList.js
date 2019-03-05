import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
	return (
		<div>
			{pokemons.map((pokemon, i) => {
				return (
					<Card
						key={i}
						id={pokemons[i].id}
						name={pokemons[i].name}
						img={pokemons[i].img}
						type={pokemons[i].type}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
