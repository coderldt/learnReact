import React, { Component } from "react";
import { connect } from "react-redux";
import './index.less'

import Header from './header'
import Sidebar from './sidebar'
import Content from './content'

class Layout extends Component {
    
    render () {
        const sideWidth = { width: this.props.ovel.menuState ? '200px' : '80px' }
        return (
            <div className="layout">
                <div className="sidebar" style={sideWidth}><Sidebar ></Sidebar></div>
                <div className="container">
                    <Header />
                    <div className="content">
                        <Content />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => Object.assign({}, state), {})(Layout)