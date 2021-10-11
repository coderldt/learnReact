import React, { Component } from 'react';

class Logo extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const logoStyle = { height: '64px', backgroundColor: '#232222de' }
        return (
            <div className='logo df' style={logoStyle}>
                <h3 style={{color: "#fff"}}>my logo</h3>
            </div>
        )
    }
}
export default Logo