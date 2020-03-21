import React from 'react';
import ProTypes from 'prop-types';

const MyComponent = ({ name, favoritenumber, children }) => {
	return(
		<div>
			hi, my name is { name }. <br/>
			children is { children }. <br/>
			my favorite number is { favoritenumber }.
		</div>
	);
};
MyComponent.defaultProps = {
	name: 'defualt'
};

MyComponent.propTypes = {
	name: ProTypes.string,
	favoritenumber: ProTypes.number.isRequired
};

export default MyComponent;
