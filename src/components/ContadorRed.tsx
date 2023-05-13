import { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };
    case "decrementar":
      return {
        ...state,
        contador: Math.max(state.contador - 1, 0),
      };
    case "custom":
      return {
        ...state,
        contador: state.contador + action.payload,
      };
    default:
      return state;
  }
};

const ContadorRed = () => {
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <div>
      <h4>Contador: {contador}</h4>
      <button
        className="btn btn-outline-success"
        onClick={() => dispatch({ type: "incrementar" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "decrementar" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "custom", payload: 10 })}
      >
        +10
      </button>
    </div>
  );
};

export default ContadorRed;
