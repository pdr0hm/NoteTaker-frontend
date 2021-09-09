import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import "./TaskDetails.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import api from "../../services/api";

const TaskDetails = () => {
  const history = useHistory();
  const params = useParams();
  const [task, setTask] = useState();

  const fetchTask = async () => {
    const response = await api.get(`task/${params.taskId}`);
    setTask(JSON.parse(response.data));
  };

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const handleEditButtonClick = () => {
    history.push(`/edit/${params.taskId}`);
  };

  return (
    <>
      <div className="buttons-details-container">
        <BsArrowLeftShort
          onClick={() => handleBackButtonClick()}
          size="50"
          cursor="pointer"
          color="#0b78df"
        />
        <AiFillEdit
          size="40"
          cursor="pointer"
          color="#0b78df"
          onClick={() => handleEditButtonClick()}
        />
      </div>
      {task && (
        <div className="task-details-container">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      )}
    </>
  );
};

export default TaskDetails;
