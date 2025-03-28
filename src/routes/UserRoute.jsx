import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const UserRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "user") {
          setIsUser(true);
        }
      }
      setChecking(false);
    });
    return () => unsubscribe();
  }, []);

  if (checking) return <div>Loading...</div>;
  return isUser ? children : <Navigate to="/login" />;
};

export default UserRoute;
