import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, HashRouter, Switch } from 'react-router-dom'

import Login from '../view/Login'
import Layout from '../view/layout'
import NoFind from '../view/noFind'

class Routers extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Layout}></Route>
                    <Route component={NoFind}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Routers