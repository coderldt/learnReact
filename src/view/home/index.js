import React, { Component } from 'react';
import { Tabs, Row, Col } from 'antd'
const { TabPane } = Tabs;

import Count from './children/count'
import EarlyList from './children/earlyList';
import EarlyEcharts from './children/earlyEcharts';


import './index.less'
import iconCaddNodes from '../../assets/images/icon-cadd-nodes.png'
import iconCaddEdges from '../../assets/images/icon-cadd-edges.png'
import iconNodes from '../../assets/images/icon-nodes.png'
import iconEdges from '../../assets/images/icon-edges.png'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countList: [],
            countTabs: [
                { label: '节点数量', value: 'node', key: 'node' },
                { label: '关系数量', value: 'edge', key: 'edge' },
            ],
            labelTabs: [
                { label: '标签词云', value: 'labelCloud', key: 'labelCloud' },
                { label: '标签排行榜', value: 'labelTop', key: 'labelTop' },
                { label: '标签积木图', value: 'labelJuggle', key: 'labelJuggle' },
            ]
        }
    }

    getCountList() {
        const max = 1000
        const min = 100
        const countList = [
            { title: '总节点数量', icon: iconCaddNodes, count: Math.floor(Math.random() * (max - min + 1) + min), bgc: '#3fc1c8' },
            { title: '总关系数量', icon: iconCaddEdges, count: Math.floor(Math.random() * (max - min + 1) + min), bgc: '#f9ba4e' },
            { title: '当日新增节点数量', icon: iconNodes, count: Math.floor(Math.random() * (max - min + 1) + min), bgc: '#8190ff' },
            { title: '当日新增关系数量', icon: iconEdges, count: Math.floor(Math.random() * (max - min + 1) + min), bgc: '#db82e3' },
        ]

        this.setState({
            countList
        })
    }

    componentDidMount() {
        this.getCountList()
    }

    componentDidCatch(error, errorInfo) {
        console.log('==============',error,errorInfo);
    }

    render() {
        const countList = this.state.countList
        return (
            <div className='home' id="home">
                {/* 统计个数 */}
                <Row className="card" gutter={[16, 16]}>
                    <Col span={6}>
                        <Count opt={countList[0]} />
                    </Col>
                    {countList.slice(1).map(item => {
                        return <Col span={6} key={item.title}><Count opt={item} /></Col>
                    })}
                </Row>
                {/* 预警 */}
                <Row className="card" gutter={[16, 16]}>
                    <Col span={6}>
                        <div className="commonBox earlyList">
                            <div className="title">预警详情</div>
                            <EarlyList></EarlyList>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="commonBox earlyList">
                            <div className="title">预警趋势</div>
                            <EarlyEcharts></EarlyEcharts>
                        </div>
                    </Col>
                </Row>
                {/* 补充 */}
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <div className="commonBox supplement">
                            <Tabs defaultActiveKey="node">
                                <TabPane tab="关系节点" key="node">1</TabPane>
                                <TabPane tab="关系数量" key="edge">2</TabPane>
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="commonBox supplement">
                            <Tabs defaultActiveKey="node">
                                <TabPane tab="标签词云" key="labelCloud">3</TabPane>
                                <TabPane tab="标签排行榜" key="labelTop">4</TabPane>
                                <TabPane tab="标签积木图" key="labelJuggle">5</TabPane>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home