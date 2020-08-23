import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import ContainerColumn from '../components/ContainerColumn'
import Title from '../components/Title'
import { useSelector } from "react-redux";


const DashboardContainer = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  return (
    <div>
      <Title userDetails={userDetails}/>
      <Container>
        <Row>
          <Col xs="5"><ContainerColumn container_title="MOST LIKED"/></Col>
          <Col xs="1"></Col>
          <Col xs="5"><ContainerColumn container_title="MOST ACTIVE"/></Col>
        </Row>
      </Container>
    </div>
  )
}

export default DashboardContainer