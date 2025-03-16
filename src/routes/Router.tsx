import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "@/pages/login.tsx";
import HomePage from "@/pages/Home";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
