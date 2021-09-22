import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';
import './styles/root.scss';

//Array of objects
const App = () => {
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      isXNext: true,
    },
  ]);

  //Index of history array
  const [currentMove, setCurrentMove] = useState(0);
  //Shortcut to get current gane state
  const current = history[currentMove];

  //To switch between X and O
  const [isXNext, setIsXNext] = useState(false);

  //console.log('History', history);

  //To calculate the winner
  const winner = calculateWinner(current.board);

  const handleSquareClick = position => {
    //Preventing the user to click the square again after the board is set
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      //To get the current board state starting from index 0
      const last = prev[prev.length - 1];
      console.log('Last', last);

      const newBoard = last.board.map((square, pos) => {
        //Checking whether the currently iterated position
        //is the one that is clicked by the player,if yes placing X
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        } else return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    //Switching between values based on prev state
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
