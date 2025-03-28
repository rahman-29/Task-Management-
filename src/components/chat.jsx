import React, { useState } from 'react';

const SubmitTask = ({ tasks, onSubmit, currentUser }) => {
  const userTasks = tasks.filter(task => task.assignedTo === currentUser.name);
  const [selectedTask, setSelectedTask] = useState(null);
  const [description, setDescription] = useState('');
  const [additionalFile, setAdditionalFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      onSubmit({ ...selectedTask, submittedBy: currentUser.name, additionalFile, description });
      setSelectedTask(null);
      setDescription('');
      setAdditionalFile('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Submit Task</h2>
      {userTasks.length === 0 ? (
        <p>No tasks to submit.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            className="w-full border p-2 rounded"
            onChange={(e) => setSelectedTask(userTasks.find(t => t.taskTitle === e.target.value))}
            defaultValue=""
            required
          >
            <option value="" disabled>Select Task</option>
            {userTasks.map((task, idx) => (
              <option key={idx} value={task.taskTitle}>{task.taskTitle}</option>
            ))}
          </select>
          <textarea
            placeholder="Description"
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Additional File URL (optional)"
            className="w-full p-2 border rounded"
            value={additionalFile}
            onChange={(e) => setAdditionalFile(e.target.value)}
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Task</button>
        </form>
      )}
    </div>
  );
};

export default SubmitTask;
