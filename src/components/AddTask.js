import React from "react";

function AddTask(props) {
  return (
    <div
      key={props.taskId}
      className="flex justify-around py-2 rounded-md my-2 bg-blue-200"
    >
      <div>{props.task.task}</div>
      <div>{props.task.taskDesc}</div>
      <button
        onClick={() => props.deleteTask(props.taskId)}
        className="px-4 py-2 bg-red-300 border-4 border-white text-white font-bold rounded-md"
      >
        Delete
      </button>
    </div>
  );
}

export default AddTask;
