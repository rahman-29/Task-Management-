import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Adjust the path if necessary
import { collection, addDoc } from "firebase/firestore";

const AssignTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState(""); // User ID to assign
  const [assignedBy] = useState("adminId"); // admin who assigns task
  const [status, setStatus] = useState("Pending");

  // If you are adding a new task
  const assignTask = async () => {
    try {
      const tasksCollection = collection(db, "tasks"); // Reference the 'tasks' collection
      await addDoc(tasksCollection, {
        taskDescription,
        assignedTo,
        assignedBy,
        status,
        createdAt: new Date(),
      });
      console.log("Task assigned successfully!");
    } catch (error) {
      console.error("Error assigning task: ", error);
    }
  };

  return (
    <div>
      <h3>Assign Task</h3>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <input
        type="text"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        placeholder="Assign To (User ID)"
      />
      <button onClick={assignTask}>Assign Task</button>
    </div>
  );
};

export default AssignTask;
