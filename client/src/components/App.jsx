import React from 'react';
import { Route, Router } from 'react-router-dom';
import AddInventory from './AddInventory';
import Inventory from './Inventory';
import history from '../history';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes,faEdit,faPlus} from '@fortawesome/free-solid-svg-icons'
import AddSourceForm from './forms/AddSourceForm'

import '../style.scss'

library.add(faTimes,faEdit,faPlus)

export default function App() {
	return (
		<div id="app">
			<Router history={history}>
				<Route exact path={process.env.PUBLIC_URL + '/'} component={Inventory} />
				<Route exact path={process.env.PUBLIC_URL + '/addInventory'} component={AddInventory} />
				<Route exact path={process.env.PUBLIC_URL + '/addSource'} component={AddSourceForm} />
			</Router>
			
		</div>
	);
}
