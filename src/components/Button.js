const Button = ({ text, pause, fn }) => {
  return (
    <button
      onClick={() => (text === "Reset" ? fn() : fn(!pause))}
      className={
        "bg-green-300 rounded-md py-1 px-2 border-2 border-black" +
        (text === "Reset" ? " ml-10" : "")
      }
    >
      {text}
    </button>
  );
};

export default Button;
