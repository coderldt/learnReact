import React, { Component } from 'react';
import { uid } from 'uid'
import Tree from '@/components/tree/index.js'
import projectsModulesData from '@/data/index.js'

class tree extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: projectsModulesData
        }
    }

    formatData (data) {
        return data.map(item => {
            const { id, name, fullPath, isOpen = true, children } = item
            const detail = { id, name, fullPath, isOpen, children: [] }
            detail.uid = uid()
            if (children && children.length) {
                detail.children = this.formatData(children)
            }
            return detail
        })
    }
    
    render () {
        const treeData = this.formatData([this.state.data.rootFile, this.state.data.rootFile])
        return (
            <div className='commonBox'>
                <div className="title">树组件</div>
                <div className="substance">
                    <Tree data={treeData}></Tree>
                </div>
            </div>
        )
    }
}
export default tree