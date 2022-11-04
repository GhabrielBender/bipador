import Login from "./pages/Login/index";
import Home from "./pages/Home/index";
// import Logs from "./pages/Logs/index";

import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        {/*<Route path="/success" element={<Success />} />
        <Route path="/getUsers" element={<GetUsers />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
