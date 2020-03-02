import React from 'react'
import {Route,Router} from 'react-router-dom'
import AddInventory from './AddInventory'
import Inventory from './Inventory'
import history from '../history'

export default function App() {
    return (
        <Router history={history}>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Inventory} />
            <Route exact path={process.env.PUBLIC_URL + "/addInventory"} component={AddInventory} />
        </Router>
    )
}
