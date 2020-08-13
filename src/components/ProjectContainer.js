import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import ContainerColumn from './ContainerColumn'

const ProjectContainer = () => {
  return (
    <Container>
      <Row>
        <Col xs="5"><ContainerColumn container_title="MOST LIKED"/></Col>
        <Col xs="1"></Col>
        <Col xs="5"><ContainerColumn container_title="MOST ACTIVE"/></Col>
      </Row>
    </Container>
  )
}

export default ProjectContainer