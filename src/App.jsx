// ✅ Clean and Correct App.jsx - Role-based Routing with DashboardPage

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/Forgotpassword";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import { AuthProvider } from "./context/AuthContext";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Forgotpassword" element={<ForgotPassword />} />
          <Route path="/AdminDashboard/*" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/UserDashboard/*" element={<UserRoute><UserDashboard /></UserRoute>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;