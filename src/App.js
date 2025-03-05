import { useState } from "react";
import { use } from "react/cjs/react.production";

function Square() {
  const [nValue, setNValue] = useState(null);

  function handleClick() {
    setNValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {nValue}
    </button>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
