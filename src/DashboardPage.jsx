import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Assuming firebase is properly configured
import { collection, getDocs, query, where } from "firebase/firestore";
import Sidebar from "./components/Sidebar";
import MyTasks from "./components/MyTasks"; // Import the MyTasks component
import './Style.css';
import Dashboard from "./components/Dashboard";
import AssignTask from "./components/AssignTask";

const DashboardPage = ({ userId }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [userProfile, setUserProfile] = useState(null);
  const [recentTasks, setRecentTasks] = useState([]);

  useEffect(() => {
    // Fetch user profile
    const fetchUserProfile = async () => {
      const userDoc = await getDocs(collection(db, "users"));
      const user = userDoc.docs.find(doc => doc.id === userId);
      if (user) {
        setUserProfile(user.data());
      }
    };

    // Fetch recent tasks
    const fetchRecentTasks = async () => {
      const tasksCollection = collection(db, "tasks");
      const q = query(tasksCollection, where("assignedTo", "==", userId)); // Fetch tasks for current user
      const querySnapshot = await getDocs(q);
      const taskList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecentTasks(taskList.slice(0, 5)); // Get the 5 most recent tasks
    };

    fetchUserProfile();
    fetchRecentTasks();
  }, [userId]);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard recentTasks={recentTasks} />;
        
      case "My Tasks":
        return <MyTasks userId={userId} />; // Show MyTasks for the current user
      case "Assigned Tasks":
        return <AssignTask />;
      case "Task Report":
        return <h1>Task Report</h1>;
      case "Chats":
        return <h1>Chats</h1>;
      case "Completed Task":
        return <h1>Completed Task</h1>; 
      case "Profile":
        return <h1>Profile</h1>;
      default:
        return <h1>Welcome to the Dashboard</h1>;
    }
  };

  return (
    <div className="flex">
      <div className="sidebar">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
};

export default DashboardPage;
