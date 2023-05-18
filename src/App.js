import React from "react";
import Registration from "./Pages/Registration/Index";
import Login from "./Pages/login/Index";
import Home from "./Pages/Home/Index.js";
import Loginuser from "./privateRoutes/LoginUser";
import NotLogin from "./privateRoutes/NotLoginUser";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Loginuser />}>
        <Route path="/" element={<Home />}></Route>
      </Route>

      <Route element={<NotLogin />}>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
