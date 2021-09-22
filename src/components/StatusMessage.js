import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //Iterates each element nd check whether there are any free space left in the board
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and o tied'}
    </h2>
  );
};

export default StatusMessage;
