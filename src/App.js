import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import AddTask from "./components/AddTask";

function App() {
  const [taskDetail, setTaskDetail] = useState({
    task: "",
    taskDesc: "",
  });

  const taskHandler = (event) => {
    setTaskDetail((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });

  };

  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (event) => {
    event.preventDefault();
    setTasks([...tasks, taskDetail]);
    setTaskDetail({task:"",taskDesc:""});
  };

  const deleteTask = (i) => {
    let copyTask = [...tasks];
    copyTask.splice(i,1);
    setTasks(copyTask);
  }

  let renderTask = <h2>No Task Available</h2>;

  if (tasks.length > 0) {
    renderTask = tasks.map((t, i) => {
      return <AddTask task={t} taskId={i} deleteTask={deleteTask}/>;
    });
  }

  return (
    <div>
      <div className="py-8 bg-black text-white text-center">
        <h1 className="text-5xl font-bold">Personal To Do List</h1>
      </div>

      <TaskInput
        addTaskHandler={addTaskHandler}
        tasks={tasks}
        taskDetail={taskDetail}
        taskHandler={taskHandler}
      />

      <div>{renderTask}</div>
    </div>
  );
}

export default App;
