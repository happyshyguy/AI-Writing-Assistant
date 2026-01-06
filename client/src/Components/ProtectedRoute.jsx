import { usePrivy } from "@privy-io/react-auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { authenticated, ready } = usePrivy();

  if (!ready) return <div className="flex items-center justify-center min-h-screen bg-slate-900"><p className="text-white">Loading...</p></div>;

  return authenticated ? children : <Navigate to="/" />;
}