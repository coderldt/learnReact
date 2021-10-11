import React, { Component } from "react";
import { list, currentItem} from 'config/menu/index.js'
import { connect } from 'react-redux'
import './index.less'

class Menu extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentItem
        }
    }

    onMenuClick (e, item) {
        e.stopPropagation()
        if (item.children && item.children.length) {
            item.isOpen = !item.isOpen
            this.forceUpdate()
        } else {
            this.setState({
                currentItem: item.key
            })
        }
    }

    createMenu (list) {
        const menuState = this.props.ovel.menuState
        return <ul className="menuList">
            {  
                list.map(item => {
                    let style = {
                        transition: 'all .3s',
                        transform: `rotate(${item.isOpen ? '0deg' : '180deg'})`
                    }

                    const isActive = (item.key === this.state.currentItem ? 'isActive ' : '')

                    const iconCenter = !menuState ? 'iconCenter ' : ''
                    return (
                        <li className={ 'menuItem cur-p ' + isActive + iconCenter } id={item.key} key={item.key} onClick={(e) => this.onMenuClick(e, item)}>
                            { item.icon ? <i className={ "iconfont " + item.icon }></i> : '' }
                            { <span className={'label ' + (!menuState ? 'disNode' : '')}>{item.label}</span> }
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