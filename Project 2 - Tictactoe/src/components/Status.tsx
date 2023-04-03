interface Props {
  winner: string;
  nextPlayer: string;
  isFull: boolean;
}

const Status = ({ winner, nextPlayer, isFull }: Props) => {
  let text;
  if(winner) {
    text= `Winner: ${winner}`
  } else if(isFull) {
    text = 'Tie'
  } else {
    text = `Next player: ${nextPlayer}`
  }
  return (
    <div className="status-bar">
      <p>{text}</p>
    </div>
  );
};

export default Status;
