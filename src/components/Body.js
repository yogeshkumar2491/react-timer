import { useState } from "react";
import Button from "./Button";
import useInterval from "../hooks/useInterval";

const Body = () => {
  const [seconds, setSeconds] = useState(0),
    [pause, setPause] = useState(true);

  useInterval(pause, seconds, setSeconds);

  const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);

  return (
    <div className="flex justify-center mt-[10%]">
      <div className="border-x-2 border-b-2 border-red-300 bg-yellow-50 rounded-md w-[80%] md:w-[40%] h-96 flex flex-col items-center">
        <h1 className="text-3xl mt-[5%] border-y-4 border-solid hover:border-dotted">
          React.js Digital Timer
        </h1>
        <h1 className="text-5xl pt-[25%]">{formatSeconds(seconds)}</h1>
        <div className="mt-[10%] text-2xl">
          <Button text={pause ? "Start" : "Stop"} pause={pause} fn={setPause} />
          <Button text={"Reset"} pause={pause} fn={() => setSeconds(0)} />
        </div>
      </div>
    </div>
  );
};

export default Body;
