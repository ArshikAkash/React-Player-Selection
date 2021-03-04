import React from 'react';

const Selection = (props) => {
	const selection = props.selection;
	return (
		<div>
			<h4>Players Selected : {selection}</h4>
		</div>
	);
};

export default Selection;
