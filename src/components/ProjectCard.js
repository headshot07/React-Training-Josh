import React from 'react'
import { Media } from 'reactstrap'

const ProjectCard = (props) => {
  const {image_url, name, description} = props.project;
  //console.log(image_url, name, description)
  return (
    <Media>
      <Media left href="#">
        <Media object variant="top" style={{ maxHeight: 80, maxWidth: 100 }} src={image_url} className='image-responsive' alt="Generic placeholder image" roundedCircle/>
      </Media>
      <Media body>
        <Media heading>
          {name}
        </Media>
        {description}
      </Media>
    </Media>
  )
}

export default ProjectCard;