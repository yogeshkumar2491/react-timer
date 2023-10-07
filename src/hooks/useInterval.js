const { useEffect } = require("react");

const useInterval = (pause, seconds, setSeconds) => {
  useEffect(() => {
    const timer = !pause
      ? setInterval(() => {
          setSeconds(seconds + 1);
        }, 1000)
      : null;

    return () => clearInterval(timer);
  });
};

export default useInterval;
