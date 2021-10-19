import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="screen">
      <div className="start">
        <input
          placeholder="Enter your name"
          className="start-input"
          ref={inputRef}
        />
        <button className="start-button" onClick={handleClick}>
          Start Game
        </button>
      </div>
    </div>
  );
}
