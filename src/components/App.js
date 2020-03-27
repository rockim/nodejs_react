import React, { Component }  from 'react';
import { Button, Image,Container,Row,Col } from 'react-bootstrap';
import Nav from './navbar';
import challenger from './img/challenger_1.png';
import Drop from './tierdown';
import Custom from './Customdrop';
function App () {
	return (
		<div>
		  <Nav></Nav>
		  <div>
		   <Drop></Drop>
		   <Custom></Custom>
		   <br />
		   <Container>
			<Row>
				<Col xs={6} md = {4}>
		   		  <Image src= {challenger} rounded  />
				</Col>
			</Row>
		   </Container>
		  </div>
		</div>
	)
}
export default App;
