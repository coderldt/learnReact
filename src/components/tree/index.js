import React, { Component } from 'react';
import {
    PlusSquareOutlined,
    MinusSquareOutlined,
  } from '@ant-design/icons';
import './index.less'

class Tree extends Component {
    constructor (props) {
        super(props)
    }

    onItemCLick (e, item) {
        e.stopPropagation()
        item.isOpen = !item.isOpen
        this.forceUpdate()
    }

    createItem (item) {
        const { children, name, id, isOpen, uid } = item

        let iconCon = ''
        if (children && children.length) {
            iconCon = (isOpen ? <MinusSquareOutlined onClick={(e) => this.onItemCLick(e, item)} /> : <PlusSquareOutlined onClick={(e) => this.onItemCLick(e, item)}/>)
        }
         
        const body = <li className="item" key={uid}>
            {iconCon}
            <span className="label" onClick={(e) => this.onItemCLick(e, item)}>{ name }</span>
            { isOpen && children && children.length && <ul className="child" style={{maxHeight: isOpen ? '2000px' : '0px'}}>{ children.map(item => this.createItem(item)) }</ul>}
        </li>
        return body
    }

    render () {
        const { data } = this.props

        const child = data.map(item => this.createItem(item))
        const noData = <div>暂无数据</div>

        return (
            <div className='Tree'>
                {
                    data.length ? child :noData
                }
            </div>
        )
    }
}
export default Tree