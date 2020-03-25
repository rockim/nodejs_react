import React, { Component } from 'react';
import { Navbar,Nav, Button,Form,FormControl } from 'react-bootstrap';

function navbar () {
	return( 
			<Navbar bg="dark" variant="dark">
    				<Navbar.Brand href="#home">Rockim-proejct</Navbar.Brand>
    				<Nav className="mr-auto">
      					<Nav.Link href="#home">Home</Nav.Link>
      					<Nav.Link href="#login">Login</Nav.Link>
      					<Nav.Link href="#garry">Garry</Nav.Link>
    				</Nav>
    				<Form inline>
      					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
      					<Button variant="outline-info">Search</Button>
    				</Form>
  			</Navbar>
	)
}

export default navbar;
