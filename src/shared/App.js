import React, { Component }  from 'react';
import { Route,Switch } from 'react-router-dom';
import Nav from '../components/navbar';
import Drop from '../components/tierdown';
import Custom from '../components/Customdrop';
import Tierimg from '../components/tierimg';
import { Home, Garry, Login } from '../pages';
function App () {
	return (
		<div>
		  <Switch>
			<Route exact  path="/Home" compoent={Home}/>
			<Route path="/Login" component={Login}/>
			<Route path="/Garry" component={Garry}/>
		  </Switch>
		  <Nav></Nav>
		  <br />
		  <div>
		   <Custom></Custom>
		   <br />
		   <Tierimg />
		  </div>
		</div>
	)
}
export default App;
