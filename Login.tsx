import { useContext, useState } from "react";
import { AuthCtx } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthCtx);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/"); // success → Dashboard
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Login 🔑</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
