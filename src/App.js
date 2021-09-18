import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  //To switch between X and O
  const [isXNext, setIsXNext] = useState(false);

  //To calculate the winner
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    //Preventing the user to click the square again after the board is set
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        //Checking whether the currently iterated position
        //is the one that is clicked by the player,if yes placing X
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        } else return square;
      });
    });
    //Switching between values based on prev state
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
