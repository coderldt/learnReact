import React, { Component } from 'react';
import * as echarts from 'echarts';

class Echarts extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        console.log(this.props);
        const myChart = echarts.init(document.querySelector('#Echarts'))
        myChart.setOption(this.props.options)
    }

    render () {
        const style = {
            width: "100%",
            height: "100%"
        }
        return (
            <div id='Echarts' style={style}></div>
        )
    }
}
export default Echarts