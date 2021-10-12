import React, { Component } from 'react';
import { Carousel } from 'element-react';

class EarlyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recordList: []
        }
    }

    getRecordList () {
        let list = []
        const max = 10000
        const min = 10
        Array(22).fill(1).forEach(() => {
            list.push({ title: '当前申请人关联到二维节点中人的黑名单的个数', count: Math.floor(Math.random()*(max - min + 1) + min) })
        })

        list = list.sort((a, b) => b.count - a.count)

        const recordList = []
        for (let index = 0; index < list.length; index += 8) {
            recordList.push([...list.slice(index, index + 8)])
        }

        this.setState({
            recordList
        })
    }

    componentDidMount () {
        this.getRecordList()
    }

    render() {
        return (
            <Carousel>
                {
                    this.state.recordList.map((item, index) => {
                        return (
                            <Carousel.Item key={index}>
                                {item.map((v, i) => {
                                    return (<div className="warning df" key={i}>
                                        <span className="idx df">{ index * 7 + i + 1 }</span>
                                        <span className="title f1 textEllipsis" title={v.title}>{v.title}</span>
                                        <span className="count">{v.count}</span>
                                    </div>)
                                })}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        )
    }
}
export default EarlyList