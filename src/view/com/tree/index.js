import React, { Component } from 'react';
import Tree from '@/components/tree/index.js'
import projectsModulesData from '@/data/index.js'

class tree extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: projectsModulesData
        }
    }

    getUID () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    formatData (data) {
        return data.map(item => {
            const { id, name, fullPath, isOpen = true, children } = item
            const detail = { id, name, fullPath, isOpen, children: [] }
            detail.uid = this.getUID()
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