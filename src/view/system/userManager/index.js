import React, { Component } from 'react';

import Search from './children/search'
import Table from './children/table'
import './index.less'

class UserManager extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

    onSearch = (value) => {
        console.log(value);
    }

    render () {
        return (
            <div className='userManager commonBox'> 
                <div className="title">用户管理</div>
                <Search onSearch={this.onSearch}></Search>
                <Table></Table>
            </div>
        )
    }
}
export default UserManager