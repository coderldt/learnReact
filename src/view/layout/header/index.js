import React, { Component } from "react";
import './index.less'

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="header">
                <div className="left">
                    <span>返回</span>
                    <span>首页</span>
                </div>
                <div className="right">
                    <span>全屏</span>
                    <span>设置</span>
                    <span>头像</span>
                </div>
            </div>
        )
    }
}

export default Header