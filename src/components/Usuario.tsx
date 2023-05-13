import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const Usuario = () => {
  const [user, setUser] = useState<User>();
  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Juan Bohorquez",
    });
  };
  return (
    <div className="mt-1">
      {user ? <h4>{JSON.stringify(user)}</h4> : <h4>No hay usuario</h4>}
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Usuario;
