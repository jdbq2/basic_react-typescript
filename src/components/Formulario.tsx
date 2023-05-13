import useForm from "../hooks/userForm";

interface FormData {
  name: string;
  email: string;
}

const Formulario = () => {
  const { formulario, handleChange } = useForm<FormData>({
    name: "",
    email: "",
  });
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          onChange={handleChange}
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          value={formulario.email}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          name="name"
          value={formulario.name}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};

export default Formulario;
