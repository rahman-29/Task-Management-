// src/components/MyTasks.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Assuming firebase is properly configured
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";

const MyTasks = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      // Fetch tasks assigned to the current user (by userId)
      const tasksCollection = collection(db, "tasks");
      const q = query(tasksCollection, where("assignedTo", "==", userId)); // Fetch tasks for current user
      const querySnapshot = await getDocs(q);
      const taskList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskList);
    };

    fetchTasks();
  }, [userId]);

  const handleSubmitTask = async (taskId) => {
    const taskRef = doc(db, "tasks", taskId);

    // Update task status to "Submitted"
    await updateDoc(taskRef, {
      status: "Submitted",
      submittedAt: new Date(),
    });

    alert("Task submitted successfully!");

    // Optionally, move the task to the Task Report (can be a separate collection or change status)
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.taskDescription}</h3>
            <p>Status: {task.status}</p>
            {task.status === "Pending" && (
              <button onClick={() => handleSubmitTask(task.id)}>Submit Task</button>
            )}
            {task.status === "Submitted" && <p>Task submitted.</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTasks;
