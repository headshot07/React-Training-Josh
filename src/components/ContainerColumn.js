import React from 'react'
import ProjectCard from './ProjectCard'
import projectList from '../projectsList.json'
import './ContainerColumn.css'

const ContainerColumn = (props) => {
  return (
    <div>
      <div className="container-title">
        { props.container_title }
      </div>
      <div>
        { projectList.map((project)=>{ return (<ProjectCard project={project} />)}) }
      </div>
    </div>
  )
}

export default ContainerColumn;