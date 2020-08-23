import React, {useEffect} from 'react'
import ProjectCard from './ProjectCard'
//import projectList from '../projectsList.json'
import './ContainerColumn.css'
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../actions/projectActions";


const ContainerColumn = (props) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getProjects()); }, []) 

  const { projectList } = useSelector((state) => state.projectsReducer);
  //console.log(projectList)
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