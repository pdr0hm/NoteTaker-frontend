import React from "react";
import { useHistory, useParams } from "react-router-dom";

import "./TaskDetails.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const TaskDetails = () => {
  const history = useHistory();
  const params = useParams();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const handleEditButtonClick = () => {};

  return (
    <>
      <div className="buttons-details-container">
        <BsArrowLeftShort
          onClick={() => handleBackButtonClick()}
          size="50"
          cursor="pointer"
          color="#0b78df"
        />
        <AiFillEdit size="40" cursor="pointer" color="#0b78df" />
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          molestias earum repellat, quidem unde officiis, doloremque quia
          doloribus sint, ducimus quaerat? Obcaecati vero quae omnis molestias
          deleniti nostrum eaque veritatis!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
