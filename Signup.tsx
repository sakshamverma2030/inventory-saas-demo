import { useContext, useState } from "react";
import { AuthCtx } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useContext(AuthCtx);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup(email, password);
      navigate("/"); // success → Dashboard
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Signup 📝</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
