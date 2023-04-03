const Footer = ({ clearLocal, countO, countX, history, setHistory, setCurrentMove, currentMove }: any) => {
  
  function newGame() {
    if(currentMove === 0) return;
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function undo() {
    setHistory([ ...history.slice(0, history.length - 1)])
    setCurrentMove(currentMove - 1)
  }

  function reset() {
    newGame();
    clearLocal();
  }

  return (
    <div className="game-settings">
      <button className="btn-grad" onClick={newGame}>New Game</button>
      <button
        className="btn-grad"
        onClick={reset}
      >
        Reset
      </button>
      <button className="btn-grad" onClick={undo}>Undo</button>
      <div className="f">
        <p>{`Player Win Count (X): ` + countX}</p>
        <p>{`Player Win Count (O): ` + countO}</p>
      </div>
    </div>
  );
};

export default Footer;
