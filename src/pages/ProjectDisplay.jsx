import React from 'react'
import { ProjectList } from '../helpers/ProjectList';
import {useParams} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css'
import { Tooltip } from '@mui/material';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} />
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <Tooltip title='click to see the project!'>
        <a href="https://github.com/Csalinas1009/milestone-project-2"><GitHubIcon/></a>
        </Tooltip>
      </div>
    );
  }

export default ProjectDisplay