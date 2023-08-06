import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProjectItem({image, name, id}) {
  const naviate = useNavigate()
  return (
    <div className='projectItem' onClick={( ) => {
      naviate("/projects/" + id)
    }}>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'>
            <h1>{name}</h1>
        </div>
    </div>
  )
}

export default ProjectItem;