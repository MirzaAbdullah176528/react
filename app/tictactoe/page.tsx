"use client";
import { useState } from "react";


function Square({value,onSquareClick}:{value: string | null | 0; onSquareClick: () => void;}){
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{ width: "150px", height: "100px", fontSize: "32px" }}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [xisnext , setXisNext] =useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares)
  let status;
  if(winner){
    status = 'Winner'+winner;
  }
  else{
    status = 'Next player'+(xisnext? 'X':'O')
  }

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    if(nextSquares[i]){
      return
    }
    if(xisnext){
      nextSquares[i] = 'X'
    }
    else{
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares);
    setXisNext(!xisnext)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="square" style={{height:'100px',width:'500px' }} >{status}</div>
    </>
  );
}


function calculateWinner(squares:any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
