import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, HashRouter, Switch, Redirect } from 'react-router-dom'

import Login from '../view/Login'
import Layout from '../view/layout'
import NoFind from '../view/noFind'

class Routers extends Component {
    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Layout}></Route>
                    <Redirect from="/" to="/home"></Redirect>
                    <Route component={NoFind}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default Routers