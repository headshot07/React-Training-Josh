import React from 'react'
import { Button, Form, Row, Col, Card, CardBody, Container, FormGroup, FormFeedback, Label, Input} from 'reactstrap'
import './LoginComponent.css'
import {LOGIN_REDUCER} from '../shared/actionConstants'
//import {PropTypes,defaultProps} from 'prop-types'
import { setUsername, setPassword } from "../actions/loginActions";

let LoginComponent = ({ validateData, dispatch, username, password, usernameError, passwordError, logValues }) => {

  //const {username, password, usernameError, passwordError} = state
  const setUsernameWrapper = (evt) =>{
    // setUsername(evt.target.value)
    dispatch(setUsername(evt))
    //dispatch({type: LOGIN_REDUCER.SET_USERNAME, value: evt.target.value})
    //console.log(evt.target.value)
    //dispatch({type: 'field', field: 'username', value: evt.target.value});
  }

  const setPasswordWrapper = (evt) =>{
    // setPassword(evt.target.value)
    dispatch(setPassword(evt))
    //dispatch({type: LOGIN_REDUCER.SET_PASSWORD, value: evt.target.value})
    //console.log(evt.target.value)
    //dispatch({type: 'field', field: 'password', value: evt.target.value});
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
                    <Input type="email" name="email" id="exampleEmail" placeholder="Ex- abc123@gmail.com" onChange={setUsernameWrapper} value={username} invalid={(usernameError !== null)} >
                    </Input>
                    <FormFeedback>{usernameError}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" onChange={setPasswordWrapper} value={password} invalid={(passwordError !== null)}>
                    </Input>
                    <FormFeedback>{passwordError}</FormFeedback>
                  </FormGroup>
                  <Button onClick={()=>{
                    logValues();
                    validateData();
                  }} >
                    Login</Button>
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

// LoginComponent.propTypes = {
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   setUsername: PropTypes.func.isRequired,
//   setPassword: PropTypes.func.isRequired,
//   logValues: PropTypes.func.isRequired
// }

// LoginComponent.defaultProps = {
//     username: "test123",
//     password: "1234"
// }