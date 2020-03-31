import React, { Component } from 'react';
import { Navbar,Nav, Button,Form,FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import challenger from './Img/challenger_1.png'
function navbar () {
	return( 
			<Navbar bg="dark" variant="dark">
    				<Navbar.Brand href="/Home">
				  <img
					src= {challenger}
					width="30"
					height="30"
					className="d-inline-block align-top"
				  />{' '}
				  Rockim-project
				</Navbar.Brand>
    				<Nav className="mr-auto">
      					<Nav.Link href="/Home">Home</Nav.Link>
      					<Nav.Link href="/Login">Login</Nav.Link>
      					<Nav.Link href="/Garry">Garry</Nav.Link>
    				</Nav>
    				<Form inline>
      					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
      					<Button variant="outline-info">Search</Button>
    				</Form>
  			</Navbar>
	)
}

export default navbar;
