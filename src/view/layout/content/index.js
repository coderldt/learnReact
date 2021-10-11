import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { listMap } from '../../../config/menu/index'

import Home from '../../home'
import NoFind  from '../../noFind';

class Content extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                { listMap.map(item => {
                    return <Route path={item.path} component={item.Component} key={item.path}></Route>
                }) }
                <Route component={NoFind}></Route>
            </Switch>
        )
    }
}
export default Content