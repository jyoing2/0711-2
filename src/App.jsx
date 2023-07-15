import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(RemainTime());
  const [prevmin, setPrevmin] = useState(time.min);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = RemainTime();
      setTime(newTime);

      if (newTime.min !== prevmin) {
        const minPassed = newTime.min - prevmin;
        console.log(`그새 1분이 더 지났어..`);
        setPrevmin(newTime.min);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [prevmin]);

  function RemainTime() {
    const now = new Date();
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timer = day - now;

    const hours = Math.floor(timer / (1000 * 60 * 60));
    const min = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((timer % (1000 * 60)) / 1000);

    return {
      hours: hours,
      min: min,
      sec: sec,
    };
  }

  return (
    <div>
        벌써 하루가 {time.hours}:{time.min}:{time.sec} 밖에 안남았어..!
    </div>
  );
}

export default App;
