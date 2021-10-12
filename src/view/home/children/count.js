import React, { Component } from 'react';

class Count extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const { title = '', icon = '', count = 0, bgc } = this.props.opt || {}
        const bgcStyle = { 'backgroundColor': bgc }
        return (
            <div className='Count df' style={bgcStyle}>
                <img src={icon} />
                <div className="f1">
                    <div className="title">{ title }</div>
                    <div className="count">{ count }</div>
                </div>
            </div>
        )
    }
}
export default Count