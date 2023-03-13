import React, { useState } from "react";

function App() {
  setInterval(currentTime, 1000);

  const time = new Date().toLocaleTimeString();
  const [clock, setTime] = useState(time);

  function currentTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
