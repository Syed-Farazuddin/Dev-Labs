import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/UserPages/Login.jsx";
import Register from "./pages/UserPages/Register.jsx";
import Homepage from "./pages/Homepage.jsx";
import AnimatedRegister from "./pages/UserPages/AnimatedRegister.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<AnimatedRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
