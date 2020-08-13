import React from 'react'
import { Button, Form, Row, Col, Card, CardBody, Container, FormGroup, FormFeedback, Label, Input} from 'reactstrap'
import './LoginComponent.css'
import {PropTypes,defaultProps} from 'prop-types'
const LoginComponent = ({username, password, setUsername, setPassword, logValues}) => {
  const setUsernameWrapper = (evt) =>{
    setUsername(evt.target.value)
    console.log(evt.target.value)
  }
  const setPasswordWrapper = (evt) =>{
    setPassword(evt.target.value)
    console.log(evt.target.value)
  }
  return (
    <div className="form">
      <Container>
        <Row>
          <Col md="4"></Col>
          <Col>
            <Card>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Ex- abc123@gmail.com" onChange={setUsernameWrapper} value={username}>
                    </Input>
                    <FormFeedback valid>Email Is Already Taken!</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" onChange={setPasswordWrapper} value={password}>
                    </Input>
                    <FormFeedback valid>Password Is Incorrect!</FormFeedback>
                  </FormGroup>
                  <Button onClick={logValues} >Login</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="4"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginComponent;

LoginComponent.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  logValues: PropTypes.func.isRequired
}

// LoginComponent.defaultProps = {
//     username: "test123",
//     password: "1234"
// }