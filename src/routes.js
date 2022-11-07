import Login from "./pages/Login/index";
import Home from "./pages/Home/index";
import Logs from "./pages/Logs/index";
import Upload from "./pages/Upload/index";

import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Logs" element={<Logs />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
