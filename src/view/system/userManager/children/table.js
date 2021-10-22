import React, { Component } from 'react';
import { Table, Pagination } from 'antd'
import { uid } from 'uid'

class Tables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                { title: '用户账号', key: "countId", dataIndex: 'countId', align: 'center' },
                { title: '用户昵称', key: "name", dataIndex: 'name', align: 'center' },
                { title: '状态', key: "status", dataIndex: 'status', align: 'center' },
                { title: '创建日期', key: "createTime", dataIndex: 'createTime', align: 'center' },
                { title: '手机号', key: "phone", dataIndex: 'phone', align: 'center' },
                { title: '邮箱', key: "eMail", dataIndex: 'eMail', align: 'center' },
                { title: '操作', key: "2", align: 'center' },
            ],
            data: [],
            pagination: {
                current: 1,
                pageSize: 10,
                total: null
            },
            loading: false
        }
        // this.getData()
    }

    getData() {
        
    }

    componentDidMount() {
        this.setState({
            data: [
                { countId: uid(6), key: '1', name: '张三', status: 0, createTime: '2021-10-22', phone: '18712345678', eMail: '1912345678@qq.com' },
                { countId: uid(6), key: '2', name: '张三', status: 0, createTime: '2021-10-22', phone: '18712345678', eMail: '1912345678@qq.com' },
                { countId: uid(6), key: '3', name: '张三', status: 0, createTime: '2021-10-22', phone: '18712345678', eMail: '1912345678@qq.com' },
                { countId: uid(6), key: '4', name: '张三', status: 0, createTime: '2021-10-22', phone: '18712345678', eMail: '1912345678@qq.com' },
                { countId: uid(6), key: '5', name: '张三', status: 0, createTime: '2021-10-22', phone: '18712345678', eMail: '1912345678@qq.com' },
                { countId: uid(6), key: '6', name: '张三', status: 0, createTime: '2021-10-22', phone: '18712345678', eMail: '1912345678@qq.com' },
                { countId: uid(6), key: '7', name: '张三', status: 0, createTime: '2021-10-22', phone: '18712345678', eMail: '1912345678@qq.com' },
            ],
            pagination: {
                total: 12
            },
            loading: false
        })
    }

    render() {
        const { data, loading, columns, pagination } = this.state;
        return (
            <div className='Table'>
                <Table
                    columns={columns}
                    loading={loading}
                    scroll={{ x: 200, y: 340 }}
                    pagination={false}
                    dataSource ={data}
                />
            </div >
        )
    }
}
export default Tables