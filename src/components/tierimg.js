import React from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap';
import challenger from "./Img/challenger_1.png";
function tierimg () {
	return (
		<Container>
                        <Row>
                                <Col xs={6} md = {4}>
                                  <Image src= {challenger} rounded  />
                                </Col>
                        </Row>
                </Container>
	)
}

export default tierimg;
