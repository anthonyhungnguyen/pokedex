import React from 'react';

const SearchBox = ({ onSearchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--purple bg-light-yellow'
				type='search'
				placeholder='type to search'
				onChange={onSearchChange}
			/>
		</div>
	);
};

export default SearchBox;
