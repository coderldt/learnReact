import React, { Component } from "react";
import { connect, useDispatch } from 'react-redux'
import { onMenuChange, onAllScreenState } from '../../../store/ovel'
import './index.less'
import { 
    HomeOutlined, 
    MenuFoldOutlined, 
    MenuUnfoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    PicCenterOutlined,
} from '@ant-design/icons'
import { Popover } from 'antd'

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const content = (
            <div>
              <p>修改密码</p>
              <p>退出登录</p>
            </div>
          );
        return (
            <div className="header df">
                <div className="left">
                    <span className="menuState r cur-p" onClick={() => this.props.onMenuChange()}>
                        { this.props.ovel.menuState ? <MenuFoldOutlined /> : <MenuUnfoldOutlined /> }
                    </span>
                    <span className="no-select" href="/">首页</span>
                </div>
                <div className="f1 tar">
                    <span className="r cur-p" onClick={ () => this.props.onAllScreenState() }>
                        { this.props.ovel.allScreenState ? <FullscreenExitOutlined /> : <FullscreenOutlined /> }
                    </span>
                    <PicCenterOutlined className="r" />
                    <Popover content={content} className="no-select">
                        你好
                    </Popover>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return Object.assign({}, state)
}

export default connect(mapStateToProps, { onMenuChange, onAllScreenState })(Header)