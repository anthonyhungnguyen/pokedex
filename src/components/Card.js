import React from 'react';

const Card = ({ id, num, name, img, type }) => {
	const listItems = type.map(item => <li className='pa2 ba bw2 br4 grow dib'>{item}</li>);
	return (
		<div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt={`robot${id}`} src={img} />
			<div>
				<h3 className='hover-light-red f3 lh-copy'>{name}</h3>
				<ul className='list pl0 flex justify-around'>{listItems}</ul>
			</div>
		</div>
	);
};

export default Card;
