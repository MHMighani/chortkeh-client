import React from 'react'
import {Route,Router} from 'react-router-dom'
import AddInventory from './AddInventory'
import Inventory from './Inventory'
import history from '../history'

export default function App() {
    return (
        <Router history={history}>
            <Route exact path="/" component={Inventory} />
            <Route exact path="/addInventory" component={AddInventory} />
        </Router>
    )
}
