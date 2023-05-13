import { ChangeEvent, useState } from "react";

const useForm = <T>(initialState: T) => {
  const [formulario, setFormulario] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [target.name]: target.value,
    });
  };

  return {
    formulario,
    handleChange,
  };
};

export default useForm;
