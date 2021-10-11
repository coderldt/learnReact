import React, { Component } from 'react';

class NoFind extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const style = { 'fontWeight': '700', 'fontSize': '40px' }
        return (
            <div className='df commonBox' style={style}>
                404，页面丢失
            </div>
        )
    }
}
export default NoFind