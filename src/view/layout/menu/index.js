import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { list, currentItem} from 'config/menu/index.js'
import { connect } from 'react-redux'
import './index.less'

class Menu extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentItem: window.location.hash.slice(1)
        }
    }

    onMenuClick (e, item) {
        e.stopPropagation()
        const { role, location } = this.props;
        if (item.children && item.children.length) {
            item.isOpen = !item.isOpen
            this.forceUpdate()
        } else {
            this.setState({
                currentItem: item.path
            })
        }
    }

    createMenu (list) {
        const menuState = this.props.ovel.menuState
        console.log(this.state.currentItem);
        return <ul className="menuList">
            {  
                list.map(item => {
                    let style = {
                        transition: 'all .3s',
                        transform: `rotate(${item.isOpen ? '0deg' : '180deg'})`
                    }

                    const isActive = (item.path === this.state.currentItem ? 'isActive ' : '')
                    console.log(item.key, this.state.currentItem, isActive);
                    const iconCenter = !menuState ? 'iconCenter ' : ''
                    return (
                        <li className={ 'menuItem cur-p ' + isActive + iconCenter } id={item.key} key={item.key} onClick={(e) => this.onMenuClick(e, item)}>
                            { item.icon ? <i className={ "iconfont " + item.icon }></i> : '' }
                            { <Link to={item.path || '/noFind'} className={'label ' + (!menuState ? 'disNode' : '')}>{item.label}</Link> }
                            { 
                                menuState && item.children 
                                && item.children.length 
                                ? <i className={ 'iconfont icon-jiantoushang jiantoushang'} style={style}></i> : '' }
                            { menuState && item.isOpen && item.children && item.children.length ? this.createMenu(item.children)  : ''  }
                        </li>
                    )
                })
            }
        </ul>
    }

    render () {
        return (
            <div>
                {this.createMenu(list)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return Object.assign({}, state)
}

export default connect(mapStateToProps, {})(Menu)