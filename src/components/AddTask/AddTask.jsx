import React, { useState } from "react";

import "./AddTask.css";

import Button from "../Button/Button";

const AddTask = ({ handleTaskAddition }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const handleTaskAddition = (taskTitle, taskDescription) => {
  //   if (taskTitle) {
  //     const newTasks = [
  //       ...tasks,
  //       {
  //         title: taskTitle,
  //         description: taskDescription,
  //         id: uuidv4(),
  //         completed: false,
  //       },
  //     ];

  //     setTasks(newTasks);
  //     history.push("/TasksList");
  //   }
  // };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="container-addtask">
        <h2>Adicionar task</h2>

        <div className="add-task-container">
          <label htmlFor="title">Título</label>
          <input
            onChange={handleTitleChange}
            value={title}
            type="text"
            className="add-task-input"
            id="title"
          />
          <label htmlFor="description">Descrição</label>
          <textarea
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            className="add-task-input"
            id="description"
          />
          <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
