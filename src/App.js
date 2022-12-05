import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/reset.css";
import { UserProvider } from "./contexts/UserContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/sign-in" />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
