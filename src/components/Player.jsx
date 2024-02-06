import { useState, useRef } from "react";
export default function Player() {
  const playerOne = useRef();
  const [name, setName] = useState();
  function handleNameChange() {
    setName(playerOne.current.value);
    playerOne.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? "stranger danger"} to the game</h2>
      <p>
        <input ref={playerOne} type="text" placeholder="Enter your name" />
        <button onClick={handleNameChange}>Enter</button>
      </p>
    </section>
  );
}
