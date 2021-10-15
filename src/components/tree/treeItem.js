import React, { Component } from 'react';

class TreeItem extends Component {
    constructor (props) {
        super(props)
    }

    

    render () {
        const { children, name } = this.props.detail
         
        const body = <div>
            { children && children.length ? '+' : '' }
            <span>{ name }</span>
            { children && children.length && <ul>{ children.map(item => {
                return <TreeItem detail={item}></TreeItem>
            }) }</ul>}
        </div>

        return (
            <li className='TreeItem'>
                { body }
            </li>
        )
    }
}
export default TreeItem