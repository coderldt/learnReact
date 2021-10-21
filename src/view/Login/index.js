import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Input, Form, Button } from 'antd'
import './index.less'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                username: 'admin',
                password: '123456'
            }
        }
    }

    onFinish = (values) => {
        const { username, password } = values
        if (username === 'admin' && password === '123456') {
            this.props.history.push('/home')
        }
    }

    register = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div id="Common">
                <div className="box">
                    <h2>欢迎来登录</h2>
                    <Form name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        initialValues={{ ...this.state.form }}
                        onFinish={this.onFinish}>
                        <Form.Item
                            label="用户"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                            <Button type="" htmlType="submit" onClick={this.register}>
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)