import { useState } from 'react';
import './games.css';

function Connect4() {
  const [gameBoard, setGameBoard] = useState(Array(42).fill(null))
  const [currentMove, setCurrentMove] = useState(0)
  const blackIsNext = currentMove % 2 === 0;
  function handleClick(column) {
    if(calculateWinner(gameBoard, currentMove)) {
      return;
    }
    var newBoard = gameBoard.slice();
    var foundEmpty = false;
    var i = 0;
    while(!foundEmpty && i < 6) {
      if(gameBoard[column + (i * 7)] === null) {
        foundEmpty = true;
      } else {
        i++;
      }
    }
    if(foundEmpty) {
      if(blackIsNext) {
        newBoard[column + (i * 7)] = '⚫';
      } else {
        newBoard[column + (i * 7)] = '🔴';
      }
      setCurrentMove(currentMove + 1)
    }
    setGameBoard(newBoard)
  }
  const winner = calculateWinner(gameBoard, currentMove);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (blackIsNext ? '⚫' : '🔴');
  }


  return (
    <div className='connect4'>
      <div className='c4Status'>{status}</div>
    <div className="connect4Board">
      <Column onColumnClick={() => handleClick(0)} squares={gameBoard} columnNum={0}/>
      <Column onColumnClick={() => handleClick(1)} squares={gameBoard} columnNum={1}/>
      <Column onColumnClick={() => handleClick(2)} squares={gameBoard} columnNum={2}/>
      <Column onColumnClick={() => handleClick(3)} squares={gameBoard} columnNum={3}/>
      <Column onColumnClick={() => handleClick(4)} squares={gameBoard} columnNum={4}/>
      <Column onColumnClick={() => handleClick(5)} squares={gameBoard} columnNum={5}/>
      <Column onColumnClick={() => handleClick(6)} squares={gameBoard} columnNum={6}/>
    </div>
    </div>
  );
}
function Column({onColumnClick, squares, columnNum}) {
  return (
    <div className="connect4Column">
      <Square value={squares[35 + columnNum]} onSquareClick={onColumnClick}/>
      <Square value={squares[28 + columnNum]} onSquareClick={onColumnClick}/>
      <Square value={squares[21 + columnNum]} onSquareClick={onColumnClick}/>
      <Square value={squares[14 + columnNum]} onSquareClick={onColumnClick}/>
      <Square value={squares[7 + columnNum]} onSquareClick={onColumnClick}/>
      <Square value={squares[0 + columnNum]} onSquareClick={onColumnClick}/>
    </div>
  );
}
function Square({ value, onSquareClick }) {
  return (
    <button className="connect4Square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(board, movesMade) {
  if(movesMade < 7) {
    return null;
  } else {
    const checks = [[3, 10, 17, 24, 31, 38], [21, 22, 23, 24, 25, 26, 27]]
    for(var i = 0; i < checks[0].length; i++) {
      const currCheck = checks[0][i];
      const currSquare = board[currCheck];
      if(currSquare !== null) {
        if(checkHorizontal(board, currCheck, currSquare) || checkDiagonal(board, currCheck, currSquare)) {
          return currSquare;
        }
      }
    }
    for(i = 0; i < checks[1].length; i++) {
      const currCheck = checks[1][i];
      const currSquare = board[currCheck];
      if(currSquare !== null) {
        if(checkVertical(board, currCheck, currSquare)) {
          return currSquare;
        }
      }
    }
  }
  return null;
}
function checkHorizontal(board, position, player) {
  var numLeft = 0;
  var numRight = 0;
  
  for(var i = 1; i < 4; i++) {
    if(board[position - i] === player) {
      numLeft++
    } else {
      i = 5;
    }
  }
  if(numLeft === 3) {
    return true;
  } else {
    for(i = 1; i < 4; i++) {
      if(board[position + i] === player) {
        numRight++
      } else {
        i = 5;
      }
    }
    if(numLeft + numRight >= 3) {
      return true;
    }
  }
  return false;

}
function checkVertical(board, position, player) {
  var numUp = 0;
  var numDown = 0;
  
  for(var i = 1; i < 4; i++) {
    if(board[position + (i * 7)] === player) {
      numUp++
    } else {
      i = 5;
    }
  }
  if(numUp === 3) {
    return true;
  } else {
    for(i = 1; i < 4; i++) {
      if(board[position - (i * 7)] === player) {
        numDown++
      } else {
        i = 5;
      }
    }
    if(numDown + numUp >= 3) {
      return true;
    }
  }
  return false;
}
function checkDiagonal(board, position, player) {
  var numDownRight = 0;
  var numDownLeft = 0;
  var numUpRight = 0;
  var numUpLeft = 0;
  var checkLeft = true;
  var checkRight = true;
  var currRow = position - 7;
  var checked = 0;
  while(currRow > 0 && checked < 3) {
    if(checkLeft && board[currRow - (1 + checked)] === player) {numDownLeft++} else {checkLeft = false;}
    if(checkRight && board[currRow + (1 + checked)] === player) {numDownRight++}else {checkRight = false;}
    currRow = currRow - 7;
    checked++;
  }
  if(numDownRight === 3 || numDownLeft === 3) {
    console.log(position);
    return true;
  }
  checkLeft = true;
  checkRight = true;
  currRow = position + 7;
  checked = 0;
  while(currRow < 42 && checked < 3) {
    if(checkLeft && board[currRow - (1 + checked)] === player) {numUpLeft++}else {checkLeft = false;}
    if(checkRight &&board[currRow + (1 + checked)] === player) {numUpRight++}else {checkRight = false;}
    currRow = currRow + 7;
    checked++;
  }
  if(numDownRight + numUpLeft >= 3 || numDownLeft + numUpRight >= 3) {
    console.log(position);
    return true;
  }
  return false;
}
export default Connect4;
