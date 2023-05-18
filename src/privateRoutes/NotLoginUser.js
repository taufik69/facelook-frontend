import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLogin() {
  const data = useSelector((state) => state.login.loginstate);
  return data ? <Navigate to="/" /> : <Outlet />;
}
