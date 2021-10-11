import React from 'react';
import { useDispatch, connect } from 'react-redux'
import './index.less'
import { clearWinner, setWinner } from '../../../store/winner'

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
    )
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [a, b, c];
      }
    }
    return null;
}

class Board extends React.Component {
    renderSquare(i) {
        return <button key={i} className={ `square ${this.props.winner.includes(i) ? 'winner' : ''}` } onClick={() => this.props.onClick(i)}>{this.props.squares[i]}</button> 
    }
    
    render() {
        return (
            <div>
                { this.props.board.map((item, idx) => {
                    return (<div key={idx} className="board-row">
                        {
                            item.map((i, index) => {
                                return ( this.renderSquare(i.index) )
                            })
                        }
                    </div>)
                })}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        console.log(1);
        this.state = {
            history: [
                { square: Array(9).fill(null), x: null, y: null }
            ],
            board: [
                [ 
                    { index: 0 },
                    { index: 1 },
                    { index: 2 },
                ],
                [ 
                    { index: 3 },
                    { index: 4 },
                    { index: 5 },
                ],
                [ 
                    { index: 6 },
                    { index: 7 },
                    { index: 8 },
                ]
            ],
            stepNumber: 0,
            stepSortStatus: true,
            winner: [],
            xIsNext: true
        }
    }

    handlerClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.square.slice();

        // squares[i] 已点击的不能在点击
        const winner = calculateWinner(squares)
        if (winner || squares[i]) {
            return
        }

        squares[i] = this.state.xIsNext ? 'x' : 'o' 
        const x = Math.ceil((i + 1) / 3)
        const y = (i + 1) % 3 || 3

        this.setState({ 
            history: history.concat([{ square: squares, x, y }]), 
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })

        // const dispathch = useDispatch()
        // const clear = () => store.dispatch(clearWinner())

        if (calculateWinner(squares)) {
            this.setState({
                winner: calculateWinner(squares)
            })
            this.props.setWinner(this.state.xIsNext ? 'x' : 'o')
            // clear()
        }
    }

    jumpTo(move) {
        this.setState({
            stepNumber: move,
            xIsNext: move % 2 === 0 
        })
    }

    reset() {
        this.setState({
            history: [
                { square: Array(9).fill(null), x: null, y: null }
            ],
            stepNumber: 0,
            winner: [],
            xIsNext: false
        })
        this.props.clearWinner()
    } 

    reverse() {
        this.setState({
            history: this.state.history.reverse(),
            stepSortStatus: !this.state.stepSortStatus,
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squares = current.square.slice();

        let status
        if (calculateWinner(squares)) {
            status = `winner player: ${ this.state.xIsNext ? 'o' : 'x' }`;
        } else if(this.state.stepNumber === 9) {
            status = `it ends in a draw`;
        } else {
            status = `Next player: ${ this.state.xIsNext ? 'x' : 'o'  }`;
        }

        const historyStep = history.map((item, move) => {
            const desc = move ?
                `Go to move #${move} x: ${item.x} y: ${item.y}` :
                'Go to game start';
            return (
                <li key={move} className={this.state.stepNumber === move ? 'isActive' : ''}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })


        return (
            <div className="game commonBox">
                <div>{this.props.winner.value || '都是弟弟'}</div>
                <div className="game-board">
                    <Board 
                        squares={squares}
                        board={this.state.board}
                        winner={this.state.winner}
                        onClick={(i) => this.handlerClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    {/* <button onClick={ () => this.reverse() }>逆序</button> */}
                    <ol>{ historyStep }</ol>
                    <button onClick={() => this.reset()}>重新开始</button>
                </div>
            </div>
        );
    }
}
// ========================================
function mapStateToProps(state) {
    return Object.assign({}, state)
} 

export default connect(mapStateToProps, { clearWinner, setWinner })(Game)

// export  default Game


