import { sum } from "./GenerateTicket";
import Lottery from "./Lottery";
import Ticket from "./Ticket";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
