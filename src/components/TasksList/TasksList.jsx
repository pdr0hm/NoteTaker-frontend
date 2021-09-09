import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import Button from "../Button/Button";
import Tasks from "../Tasks/Tasks";
import "./TasksList.css";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await api.get("task");
    setTasks(JSON.parse(response.data));
  };

  const history = useHistory();

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskRemove = async (taskId) => {
    await api.delete(`task/${taskId}`);
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
        {tasks && (
          <Tasks
            tasks={tasks}
            handleTaskClick={handleTaskClick}
            handleTaskRemove={handleTaskRemove}
          />
        )}
      </div>
    </>
  );
};

export default TasksList;
