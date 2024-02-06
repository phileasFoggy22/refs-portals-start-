import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title="Pippin" targetTime={1} />
      <TimerChallenge title="Merry" targetTime={5} />
      <TimerChallenge title="Frodo" targetTime={10} />
      <TimerChallenge title="Sam" targetTime={15} />
    </>
  );
}

export default App;
