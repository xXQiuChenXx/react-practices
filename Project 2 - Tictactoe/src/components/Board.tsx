import { useState } from "react";
import Square from "./Square";
import Status from "./Status";
import Footer from "./Footer";
import useLocalStorage from "../useLocalStorage";

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const [countX, setCountX] = useLocalStorage("X", 0);
  const [countO, setCountO] = useLocalStorage("O", 0);

  function clearLocal() {
    setCountO(0);
    setCountX(0);
  }

function handleClick(i: number) {
    if (currentSquares[i] || calculateWinner(currentSquares)) return;
    const nextSquares = currentSquares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    let winner = calculateWinner(nextSquares);
    if(winner) {
      if(winner === 'X') setCountX(parseInt(countX) + 1);
        else setCountO(parseInt(countO) + 1);
    }
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const winner = calculateWinner(currentSquares);

  function isFull(): boolean {
    const check = currentSquares.filter(x => x === null)
    return check.length === 0;
  }

  return (
    <div className="game-col">
      <Status winner={winner} nextPlayer={xIsNext ? "X" : "O"} isFull={isFull()}/>
      <div className="game-board">
        <div className="board-row">
          <Square value={currentSquares[0]} index={0} onClick={handleClick} />
          <Square value={currentSquares[1]} index={1} onClick={handleClick} />
          <Square value={currentSquares[2]} index={2} onClick={handleClick} />
        </div>
        <div className="board-row">
          <Square value={currentSquares[3]} index={3} onClick={handleClick} />
          <Square value={currentSquares[4]} index={4} onClick={handleClick} />
          <Square value={currentSquares[5]} index={5} onClick={handleClick} />
        </div>
        <div className="board-row">
          <Square value={currentSquares[6]} index={6} onClick={handleClick} />
          <Square value={currentSquares[7]} index={7} onClick={handleClick} />
          <Square value={currentSquares[8]} index={8} onClick={handleClick} />
        </div>
      </div>
      <Footer
        history={history}
        setHistory={setHistory}
        setCurrentMove={setCurrentMove}
        currentMove={currentMove}
        clearLocal={clearLocal}
        countO={countO}
        countX={countX}
      />
    </div>
  );
};

export default Board;
