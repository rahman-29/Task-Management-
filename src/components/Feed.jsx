import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Feed = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updates = snapshot.docs.map(doc => doc.data());
      setTasks(updates);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Task Feed</h2>
      {tasks.map((task, index) => (
        <div key={index}>
          <p><strong>{task.taskTitle}</strong> by {task.assignedBy} ➝ {task.assignedTo}</p>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
