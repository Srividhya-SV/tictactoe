import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  //To switch between X and O
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = position => {
    //Preventing the user to click the square again after the board is set
    if (board[position]) {
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

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
