import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthCtx } from "./AuthProvider";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthCtx);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
