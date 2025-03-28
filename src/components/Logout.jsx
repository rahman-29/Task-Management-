import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../Style.css";

const LogoutConfirm = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login"); // Redirect to login page after logout
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Are you sure you want to logout?</h2>
        <div className="button-group">
          <button className="yes-btn" onClick={handleLogout}>Yes</button>
          <button className="no-btn" onClick={handleCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirm;
