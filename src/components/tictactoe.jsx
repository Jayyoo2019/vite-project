import React, {useState} from 'react'
import ReactDom from 'react-dom';
import '../ttt.css'

class Square extends React.Component {
 
    //  constructor(props){
    //      super(props);
    //      this.state = {
    //          value:'123',
    //      };
    //  }

    render() {
      return (
        <button className="square"
        onClick={()=>{
            console.log(this.props.value)
            //this.setState({value:"321"})
            this.props.onClick()
        }}>
          {/* TODO */}
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            sqaures:Array(9).fill(null),
            xIsNext : true,
        };
    }

 
    handleClick(i){
      const sqaures2 = this.state.sqaures.slice();
      sqaures2[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        sqaures: sqaures2,
        xIsNext: !this.state.xIsNext,
      });
    }
      

    renderSquare(i) {
      return <Square value={this.state.sqaures[i]}
      onClick={()=>{
          this.handleClick(i)
      }}/>;
    }
  
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

export default Game