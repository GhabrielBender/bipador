import Login from "./pages/Login/index";
import Home from "./pages/Home/index";
import Logs from "./pages/Logs/index";
import Navbar from "./components/Navbar";

import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Login />} />
          <Route path="Home" element={<Home />} />
          <Route path="Logs" element={<Logs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
