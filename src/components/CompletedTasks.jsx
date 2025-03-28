import React from 'react';

const CompletedTasks = ({ completed }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Completed Tasks</h2>
      {completed.length === 0 ? (
        <p>No tasks completed yet.</p>
      ) : (
        <ul className="space-y-4">
          {completed.map((task, idx) => (
            <li key={idx} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{task.taskTitle}</h3>
              <p><strong>Submitted By:</strong> {task.submittedBy}</p>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Additional File:</strong> {task.additionalFile}</p>
              <p><strong>Team:</strong> {task.teamName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasks;
