import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useHistory, useParams } from "react-router-dom";

import "./EditTask.css";
import Button from "../Button/Button";
import { BsArrowLeftShort } from "react-icons/bs";

const EditTask = () => {
  const history = useHistory();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTaskEdit();
  }, []);

  const fetchTaskEdit = async () => {
    const response = await api.get(`task/${params.taskId}`);
    const task = JSON.parse(response.data);
    console.log(response);
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleEditTaskClick = async () => {
    await api.post(`task/${params.taskId}/edit`, {
      title: title,
      description: description,
    });
    history.goBack();
  };

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className="container-edittask">
        <div className="container-header-edittask">
          <BsArrowLeftShort
            onClick={() => handleBackButtonClick()}
            size="50"
            cursor="pointer"
            color="#0b78df"
          />
          <div className="container-title-edittask">
            <h2>Editar task</h2>
          </div>
        </div>
        <div className="edit-task-container">
          <label htmlFor="title">Título</label>
          <input
            onChange={handleTitleChange}
            value={title}
            type="text"
            className="edit-task-input"
            id="title"
          />
          <label htmlFor="description">Descrição</label>
          <textarea
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            className="edit-task-input"
            id="description"
          />
          <div className="edit-task-button-container">
            <Button onClick={handleEditTaskClick}>Editar</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
