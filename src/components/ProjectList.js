import React, { useState, useEffect } from "react";
import axios from "axios";

import { ProjectCard } from "./ProjectCard";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://api1-sprint.herokuapp.com/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      {projects.map(data => (
        <ProjectCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ProjectList;
