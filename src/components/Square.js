import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  //Winning combinations are highlighted in bold based on the isWinningSqaures value
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
