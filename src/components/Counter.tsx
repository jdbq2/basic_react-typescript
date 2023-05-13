import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementar = (numero: number) => {
    setCounter(counter + numero);
  };
  return (
    <div>
      <h4>Valor: {counter}</h4>
      <button
        className="btn btn-outline-primary mt-1"
        onClick={() => incrementar(1)}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary mt-1"
        onClick={() => incrementar(2)}
      >
        +2
      </button>
    </div>
  );
};

export default Counter;
