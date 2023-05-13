import { useState, useEffect, FC, useRef } from "react";

interface Props {
  milisegundos: number;
}

const Timer: FC<Props> = ({ milisegundos }) => {
  const [start, setStart] = useState(false);
  const [segundos, setSegundos] = useState(0);
  const timerRef = useRef<number>();

  useEffect(() => {
    timerRef.current && clearInterval(timerRef.current);
    if (start) {
      timerRef.current = setInterval(
        () => setSegundos((s) => s + 1),
        milisegundos
      );
    }
  }, [milisegundos, start]);

  return (
    <>
      <h4>
        Timer <small>{segundos}</small>
      </h4>
      <button
        onClick={() => setStart(!start)}
        className="btn btn-outline-primary"
      >
        {start ? "Parar" : " Empezar"}
      </button>
    </>
  );
};

export default Timer;
