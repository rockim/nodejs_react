import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { TierDropdown, Bronze } from './tier.css'
	const CustomToggle = React.forwardRef(({children,onClick,className } ,ref) =>
		(	<div>
				<a
			  	 href=""
			  	 ref={ref}
			  	 onClick={(e) => {
					e.preventDefault();
				  	onClick(e);
			  	 }}
			  	 className={Bronze}
				>
			  	{children}
			  	&#x25bc;
				</a>
			</div>
		));
	const CustomMenu = React.forwardRef(
		({children, style, className, 'aria-labelledby': labeledBy }, ref)=> {
			const [value, setValue] = React.useState('');

			return (
				<div
				  ref={ref}
				  style={style}
				  className={className}
				  aria-labelledby={labeledBy}
				>
				  <ul className={TierDropdown}>
					{React.Children.toArray(children).filter(
						(child) =>
						  !value || child.props.children.toLowerCase().startsWith(value),
					)}
				  </ul>
				</div>
			);
		},
	);
class CustomDropdown extends Component {
	render(){
		return (
			<Dropdown>
			  <Dropdown.Toggle as = {CustomToggle} id = "dropdown-custom-components">
			  Bronze
			  </Dropdown.Toggle>
			  <Dropdown.Menu as = {CustomMenu}>
				<Dropdown.Item eventKey = "1">Bronze_1</Dropdown.Item>
				<Dropdown.Item eventKey = "2">Bronze_2</Dropdown.Item>
				<Dropdown.Item eventKey = "3">Bronze_3</Dropdown.Item>
				<Dropdown.Item eventKey = "4">Bronze_4</Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>
		)
	}
}

export default CustomDropdown;
