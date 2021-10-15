import React, { Component } from 'react';
import TreeItem from './treeItem';
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
        const { children, name, id } = item

        let iconCon = ''
        if (children && children.length) {
            iconCon = (item.isOpen ? <MinusSquareOutlined onClick={(e) => this.onItemCLick(e, item)} /> : <PlusSquareOutlined onClick={(e) => this.onItemCLick(e, item)}/>)
        }
         
        const body = <li className="item" key={id}>
            {iconCon}
            <span className="label" onClick={(e) => this.onItemCLick(e, item)}>{ name }</span>
            { item.isOpen && children && children.length && <ul className="child">{ children.map(item => this.createItem(item)) }</ul>}
        </li>
        return body
    }

    render () {
        const { data } = this.props

        const noData = <div>暂无数据</div>

        const child = <ul className="child">
            { data?.rootFile.children.map(item => this.createItem(item)) }
        </ul>

        const {children, name} = data?.rootFile
        let iconCon = ''
        if (children && children.length) {
            iconCon = (data?.rootFile.isOpen ? <MinusSquareOutlined onClick={(e ) => this.onItemCLick(e, data?.rootFile)} /> : <PlusSquareOutlined onClick={(e ) => this.onItemCLick(e, data?.rootFile)} />)
        }
        return (
            <div className='Tree'>
                { data?.rootFile 
                    ? <ul className="child">
                        {iconCon}
                        <span className="label" onClick={(e ) => this.onItemCLick(e, data?.rootFile)}>{ name }</span>
                        { data?.rootFile.isOpen && children && children.length && child}
                    </ul>
                    : noData }
            </div>
        )
    }
}
export default Tree