import React, { useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import "./AddTask.css";

import Button from "../Button/Button";
import { BsArrowLeftShort } from "react-icons/bs";

const AddTask = () => {
  const history = useHistory();
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const completed = false;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTaskClick = async () => {
    await api.post("task/new", {
      title: title,
      description: description,
      completed: completed,
    });

    setTitle("");
    setDescription("");
    history.goBack();
  };

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="container-addtask">
        <div className="container-header-addtask">
          <BsArrowLeftShort
            onClick={() => handleBackButtonClick()}
            size="50"
            cursor="pointer"
            color="#0b78df"
          />
          <div className="container-title-addtask">
            <h2>Adicionar task</h2>
          </div>
        </div>

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
