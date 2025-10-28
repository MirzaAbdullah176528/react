"use client";
import { updateTag } from "next/cache";
import { useState } from "react";
import { useEffect } from "react";


function O_shapes(){
  return(
    <div className="O_shape">
    <p className="inside_circle"></p>
    </div>
  )
}
function X_shape(){
  return(
    <div className="x-shape"></div>
  )
}
function Square({value,onSquareClick}:{value: string | null | 0; onSquareClick: () => void;}){
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{ width: "100px", height: "100px", fontSize: "32px" , margin: '0.3rem'}}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [xisnext , setXisNext] =useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [scores , setScores] = useState([0, 0])

  
  const winner = calculateWinner(squares)
  

  function Set_winner(winner:any){
    setScores(prev => {
      const updated = [...prev]
      if(winner == 'X'){
        updated[0] = updated[0] + 1  
      } else if(winner == 'O'){
        updated[1] = updated[1] + 1
      }
      return updated
    })
  }

  let status;
  if(winner){
    status = `Winner : ${winner}`;
  }
  else{
    status = `Next player : ${xisnext? 'X':'O'}`
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
  function if_game_end(){
    return;
  }

  function re_match(){
    return setSquares(Array(9).fill(null)) 
  }
const btn = <button onClick={re_match}>Start New game</button>

function Reset_score(){
  setScores([0,0])
  re_match()
}
const btn_reset = <button onClick={Reset_score} >Resart</button>


  function New_game(){
  return(
    <div className="score">
      <div className="score_card">
    <div className="X_o">
        <h1 style={{fontSize:'1.7rem'}}>Player 1</h1>
        {X_shape()}
        <p>Score = {scores[0]}</p>
      </div>
    <div className="X_o">
        <h1 style={{fontSize:'1.7rem'}}>Player 2</h1>
        {O_shapes()}
        <p>Score = {scores[1]}</p>
      </div>
    </div>
    <div className="score_btn">
      {btn}
      {btn_reset}
      </div>
    </div>
    
  )
}

useEffect(() => {
  if (winner) {
    Set_winner(winner);
  }
}, [winner]);


  
  if(status.includes(winner)){
    return (
      <div className="main_with_score">
    <div className="main">
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => if_game_end} />
        <Square value={squares[1]} onSquareClick={() => if_game_end} />
        <Square value={squares[2]} onSquareClick={() => if_game_end} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => if_game_end} />
        <Square value={squares[4]} onSquareClick={() => if_game_end} />
        <Square value={squares[5]} onSquareClick={() => if_game_end} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => if_game_end} />
        <Square value={squares[7]} onSquareClick={() => if_game_end} />
        <Square value={squares[8]} onSquareClick={() => if_game_end} />
      </div>
      <div className="square" >{status}</div>
    </div>
    <div className="new_start">
      < New_game />
    </div>
    </div>
  );
  }
  else{
return (
      <div className="main_with_score">
    <div className="main">
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
      <div className="square" >{status}</div>
    </div>
    <div className="new_start">
      < New_game />
    </div>
    </div>
    
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
}


