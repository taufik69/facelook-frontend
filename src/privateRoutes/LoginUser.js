import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../Pages/login/Index";
export default function Loginuser() {
  const data = useSelector((state) => state.login.loginstate);
  return data ? <Outlet /> : <Login />;
}
