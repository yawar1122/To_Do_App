import React from "react";

function TaskInput(props) {
  return (
    <div>
      <form
        onSubmit={props.addTaskHandler}
        className="flex justify-around py-8 bg-slate-300 items-center"
      >
        <div>
          <input
            onChange={props.taskHandler}
            type="text"
            placeholder="Task"
            id="task"
            name="task"
            value={props.taskDetail.task}
          />
          <label htmlFor="task"> Enter Your Task</label>
        </div>
        <div>
          <input
            onChange={props.taskHandler}
            type="text"
            placeholder="Description"
            id="desc"
            name="taskDesc"
            value={props.taskDetail.taskDesc}
          />
          <label htmlFor="desc">Enter Task Description</label>
        </div>
        <button className="px-3 py-2 bg-white rounded-md font-bold">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
