// src/components/Dashboard.jsx

import React from "react";

const Dashboard = ({ currentUser }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">Welcome, {currentUser?.name || "User"}!</h2>
      <p>Email: {currentUser?.email}</p>
      <p>Team Name: {currentUser?.teamName || "N/A"}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Recent Tasks</h3>
      <ul className="list-disc pl-6">
        {currentUser?.recentTasks && currentUser.recentTasks.length > 0 ? (
          currentUser.recentTasks.map((task, index) => (
            <li key={index}>
              {task.title} - <span className="italic">{task.status}</span>
            </li>
          ))
        ) : (
          <li>No recent tasks found.</li>
        )}
      </ul>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-1">About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt, risus non aliquam fermentum, nulla lorem lacinia ipsum,
          vitae tincidunt magna mauris et turpis.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
