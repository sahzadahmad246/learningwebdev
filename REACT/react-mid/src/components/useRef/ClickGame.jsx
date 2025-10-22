import React, { useRef, useState, useEffect } from "react";

const ClickGame = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [timer, setTimer] = useState(10);
  const [hearts, setHearts] = useState([]);
  const timerRef = useRef(null);

  const handleStartGame = () => {
    setScore(0);
    setTimer(10);
    setGameOver(false);
    setStartGame(true);
    setHearts([]);
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handleScore = (e) => {
    if (!startGame) return;

    setScore((score) => score + 1);

    // create heart at click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x relative to div
    const y = e.clientY - rect.top; // y relative to div
    const id = Date.now(); // unique id for each heart
    setHearts((prev) => [...prev, { x, y, id }]);

    // remove heart after 800ms
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 800);
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setGameOver(true);
      setStartGame(false);
    }
  }, [timer]);

  return (
    <div className="bg-[#090b17] h-screen text-white flex justify-center items-center flex-col">
      <div className="w-8/10 bg-[#1d2c81] p-3 rounded-xl">
        <div className="flex justify-between items-center px-2">
          <h1>Click Tracker</h1>
          <p>Score: {score}</p>
          <div className="p-2 border border-white rounded-full flex items-center justify-center w-10 h-10">
            <p>{timer}</p>
          </div>
        </div>
        <div
          className="w-full bg-[#bbf5ca] h-100 text-black my-3 p-3 rounded-xl flex items-center justify-center relative overflow-hidden select-none"
          onClick={handleScore}
        >
          {gameOver
            ? `Game over, you scored ${score}`
            : "click within this green-ish screen"}

          {/* hearts */}
          {hearts.map((heart) => (
            <span
              key={heart.id}
              style={{
                position: "absolute",
                left: heart.x,
                top: heart.y,
                transform: "translate(-50%, -50%)",
                animation: "floatUp 0.8s ease-out forwards",
                color: "red",
                fontSize: "24px",
                pointerEvents: "none",
              }}
            >
              ❤️ +1
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`text-[#202751] px-3 py-1 rounded-lg cursor-pointer ${
              startGame ? "bg-[#878991]" : "bg-white"
            }`}
            onClick={handleStartGame}
            disabled={startGame}
          >
            {gameOver ? "Restart" : "Start"}
          </button>
        </div>
      </div>

      {/* add animation keyframes */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translate(-50%, -50%) translateY(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) translateY(-50px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ClickGame;
