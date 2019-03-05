import React from 'react';

const Scroll = props => {
	return <div style={{ overflow: 'auto', height: '1080px' }}>{props.children}</div>;
};

export default Scroll;
