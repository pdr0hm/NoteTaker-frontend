import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";

import Tasks from "../Tasks/Tasks";
import "./TasksList.css";

const tasksInitialState = [
  { title: "Card 1", description: "Desc Card 1" },
  { title: "Card 2", description: "Desc Card 2 asdasaddas" },
];

const TasksList = () => {
  const [tasks, setTasks] = useState(tasksInitialState);
  const history = useHistory();

  // const handleTaskAddition = (taskTitle) => {
  //   if (taskTitle) {
  //     const newTasks = [
  //       ...tasks,
  //       {
  //         title: taskTitle,
  //         id: uuidv4(),
  //         completed: false,
  //       },
  //     ];

  //     setTasks(newTasks);
  //   }
  // };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleAddTask = () => {
    history.push("/addTask");
  };

  return (
    <>
      <div className="tasks-container">
        <div className="tasks-title">
          <h2>Minhas Tasks</h2>
          <Button className="add-button" onClick={() => handleAddTask()}>
            Adicionar
          </Button>
        </div>

        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskRemove={handleTaskRemove}
        />
      </div>
    </>
  );
};

export default TasksList;
