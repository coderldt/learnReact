import React, { Component } from "react";

import Header from './header'
import Menu from './menu'

class Layout extends Component {
    render () {
        return (
            <div>
                <Header></Header>
                <Menu></Menu>
            </div>
        )
    }
}

export default Layout