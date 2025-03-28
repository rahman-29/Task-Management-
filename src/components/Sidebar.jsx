import React from "react";


const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width: "250px",
        background: "#ddd",
        padding: "20px",
        overflowY: "auto",
        height: "100vh",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        zIndex: 100
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {["Dashboard", "My Tasks", "Assigned Tasks", "Task Report","Completed Tasks", "Chats","Profile","Logout"].map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              style={{
                width: "100%",
                padding: "10px 15px",
                marginBottom: "10px",
                background: activeTab === tab ? "#bbb" : "transparent",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                borderRadius: "6px"
              }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
