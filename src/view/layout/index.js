import React, { Component } from "react";
import { connect } from "react-redux";
import './index.less'

import Header from './header'
import Sidebar from './sidebar'

class Layout extends Component {
    
    render () {
        const sideWidth = { width: this.props.ovel.menuState ? '200px' : '80px' }
        return (
            <div className="layout">
                <div className="sidebar" style={sideWidth}><Sidebar ></Sidebar></div>
                <div className="f1"><Header ></Header></div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return Object.assign({}, state)
}

export default connect(mapStateToProps, {})(Layout)