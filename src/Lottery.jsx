import { useState } from "react";
import { GenerateTicket, sum } from "./GenerateTicket";
import Ticket from "./Ticket";

const Lottery = ({ n = 3, winningSum = 15 }) => {
  const [ticket, setTicket] = useState(GenerateTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(GenerateTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <button onClick={buyTicket} className="btn">
        Buy New Ticket
      </button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
};
export default Lottery;
