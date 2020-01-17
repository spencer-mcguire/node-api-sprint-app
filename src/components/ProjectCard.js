import React, { useState } from "react";
import axios from "axios";

export const ProjectCard = props => {
  const { name, description, id } = props.data;
  const [edit, setEdit] = useState(false);
  const [newProject, setNewProject] = useState({
    name: name,
    description: description
  });
  console.log(id);

  const isEditing = () => {
    setEdit(!edit);
  };

  const handleChanges = e => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEdit(!edit);
    axios
      .put(`https://api1-sprint.herokuapp.com/api/projects/${id}`, newProject)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="card">
      {edit ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChanges}
            placeholder={name}
          />
          <input
            type="text"
            name="description"
            onChange={handleChanges}
            placeholder={description}
          />
          <button> SAVE </button>
        </form>
      ) : (
        <>
          <h3>Project Name: </h3>
          <h2>{name}</h2>
          <h4> Project description </h4>
          <p>{description}</p>
          <button> View Actions </button>
          <button onClick={() => isEditing()}> edit </button>
        </>
      )}
      <button> delete </button>
    </div>
  );
};
