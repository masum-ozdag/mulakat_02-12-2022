import axios from "axios";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Deneme from "./pages/Deneme";
import Login from "./pages/Login";
import MultiSelect from "./pages/MultiSelect";
import Calendar from "./pages/Calendar";
import Bus from "./components/Bus";
import Sefer from "./components/Sefer";
import Bilet from "./components/Bilet";

function App() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haHN1bkBvemRhZy5jb20iLCJleHAiOjE2Njk5OTE4NDcsImxldmVsIjoxLCJ1c2VySWQiOjV9.Fd-5g0Eej6IjZN_PpLdvVEEW9qIA7j2PrE-oQ6m9FJs"
  );

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/deneme" element={<Deneme />} />
        <Route path="/select" element={<MultiSelect />} />
        <Route index element={<Login token={token} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/bus" element={<Bus token={token} />} />
        <Route path="/sefer" element={<Sefer />} />
        <Route path="/bilet" element={<Bilet />} />
      </Routes>
    </div>
  );
}

export default App;
