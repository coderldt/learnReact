import React, { Component } from 'react';
import Menu from '../menu'
import Logo from '@/components/logo'
import './index.less'

class Sidebar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            width: 1
        }
    }

    render () {
        return (
            <div className='sidebar'>
                <Logo></Logo>
                <Menu></Menu>
            </div>
        )
    }
}
export default Sidebar