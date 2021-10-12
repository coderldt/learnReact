import React, { Component } from 'react';
import { Form, Input, Button } from 'antd'

class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            form: {
                loginName: '1',
                name: '12'
            }
        }
    }

    onReset = () => {
        this.refs.form.resetFields()
    }

    render () {
        return (
            <div className='Search'>
                <Form className="df p10" layout="inline" ref="form" onFinish={this.props.onSearch}>
                    <Form.Item label="登录名" initialValue="1" name="loginName">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="姓名" initialValue="12" name="name">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item className="f1 tar" style={{flex: 1}}>
                        <Button className="mr10" type="primary" htmlType="submit">查询</Button>
                        <Button onClick={this.onReset}>重置</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Search