import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-2">
      <h2 className="p-5 border-2 border-blue-600 max-w-28 rounded-2xl mx-auto flex">{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
