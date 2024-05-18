import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import MainPage from "./pages/Main/Mainpage.jsx";
import UserProfile from "./pages/UserProfile/UserProfile.jsx";
import Homepage from "./pages/Home/Homepage.jsx";
import UserDetails from "./components/UserDetails.jsx";
import UploadImage from "./components/UploadImage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editDetails" element={<UserDetails />} />
        <Route path="/upload" element={<UploadImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
