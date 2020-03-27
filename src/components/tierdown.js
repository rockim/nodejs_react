import React, {Component} from 'react';
import {DropdownButton,ButtonGroup,Dropdown} from 'react-bootstrap';
import { Bronze } from './tier.css';

function tierdown() {
	return (
		<Dropdown>
		  <Dropdown.Toggle className = {Bronze}>
			bronze
		  </Dropdown.Toggle>
		  <Dropdown.Menu className={Bronze}>
			<Dropdown.Item eventKey="1">bronze_1</Dropdown.Item>
			<Dropdown.Item eventKey="2">bronze_2</Dropdown.Item>
			<Dropdown.Item eventKey="3">bronze_3</Dropdown.Item>
			<Dropdown.Item eventKey="4">bronze_4</Dropdown.Item>
		  </Dropdown.Menu>
		</Dropdown>
	)

}

export default tierdown;
