import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };
  return (
    <div
      className="task-container"
      style={
        task.completed ? { borderLeft: "6px solid rgb(11, 120, 223)" } : {}
      }
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="detail-task-button"
          onClick={() => handleTaskDetailsClick(task.title)}
        >
          <CgInfo></CgInfo>
        </button>

        <button
          className="remove-task-button"
          onClick={() => handleTaskRemove(task.id)}
        >
          <CgClose></CgClose>
        </button>
      </div>
    </div>
  );
};

export default Task;
