import { useState } from "react"

function Square({value, onSquareClick}) {
  const[value, setValue] = useState(null)

  function handleClick(){
    setValue('X')
  }

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  return(
  <> 
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={handleClick}/>
    <Square value={squares[0]} onSquareClick={handleClick}/>
    <Square value={squares[0]} onSquareClick={handleClick}/>
  </div>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={handleClick}/>
    <Square value={squares[0]} onSquareClick={handleClick}/>
    <Square value={squares[0]} onSquareClick={handleClick}/>
  </div>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={handleClick}/>
    <Square value={squares[0]} onSquareClick={handleClick}/>
    <Square value={squares[0]} onSquareClick={handleClick}/>
  </div>
  </>
  )
}
