import React, { useState } from 'react';

const AssignTask = ({ onAssign, currentUser, allUsers }) => {
  const [assignedTo, setAssignedTo] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskFile, setTaskFile] = useState('');
  const [timePeriod, setTimePeriod] = useState('');

  // Filter users from the same team if not admin
  const teamUsers = currentUser.role === 'admin' 
    ? allUsers 
    : allUsers.filter(user => user.team === currentUser.team && user.name !== currentUser.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!assignedTo || !taskTitle || !description) return;

    const newTask = {
      assignedBy: currentUser.name,
      assignedTo,
      taskTitle,
      description,
      taskFile,
      timePeriod,
      teamName: currentUser.team
    };

    onAssign(newTask);
    setAssignedTo('');
    setTaskTitle('');
    setDescription('');
    setTaskFile('');
    setTimePeriod('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Assign Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select Team Member</option>
          {teamUsers.map(user => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </select>

        <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Task Title" className="w-full p-2 border rounded" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" className="w-full p-2 border rounded"></textarea>
        <input type="text" value={taskFile} onChange={(e) => setTaskFile(e.target.value)} placeholder="Task File Link" className="w-full p-2 border rounded" />
        <input type="text" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} placeholder="Time Period" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Assign Task</button>
      </form>
    </div>
  );
};

export default AssignTask;
