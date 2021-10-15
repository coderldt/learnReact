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
    
    render () {
        return (
            <div className='commonBox'>
                <div className="title">树组件</div>
                <Tree data={this.state.data}></Tree>
            </div>
        )
    }
}
export default tree