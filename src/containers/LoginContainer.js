import React,{ useState, useReducer } from 'react'
import LoginComponent from '../components/LoginComponent'
import * as yup from "yup";
import apiHelper from '../apis/apiHelper'
import loginReducer, {initialState} from '../reducers/loginReducer'
import {LOGIN_REDUCER} from '../shared/actionConstants'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {loginRequest, setErrors, resetErrors} from '../actions/loginActions'

const LoginContainer = () => {

  // const initialState = {
  //   username: '',
  //   password: '',
  //   usernameError: null,
  //   passwordError: null
  // }
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [usernameError, setUsernameError] = useState(null);
  // const [passwordError, setPasswordError] = useState(null);
  // const [state, dispatch] = useReducer(LoginReducer, initialState)
  // console.log("State ")
  // console.log(state)
  // let {username, password, usernameError, passwordError} = state

  //console.log(state)
  const dispatch = useDispatch();
  //const result = useSelector((state) => state.loginReducer);
  //console.log("Result" + result)
  const {username, password, usernameError, passwordError, userDetails} = 
    useSelector((state) => state.loginReducer);
    //console.log("Username"+username)

  const logValues = () => {
    console.log(username)
    console.log(password)
  }
  const schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().required(),
  });

  // const validateData = () => 
  // {
  //   dispatch({type: 'reset-errors'});
  //   schema.validate({ username, password }, { abortEarly: false })
  //   .then(() => {
  //     //console.log(username, password)
  //     apiHelper('post', 'https://api.taiga.io/api/v1/auth', {username, password, type: 'normal'}).then((response) => {
  //       console.log(response)
  //       console.log("Response")
  //     })
  //     .catch((err)=>{
  //       console.log("Error")
  //       console.log(err)
  //     })
  //     // apiHelper('post', 'https://api.taiga.io/api/v1/auth/register', {'accepted_terms': 'true', 'email': 'sanjay123@gmail.com', 'full_name': 'Sanjay', 'password': '1234', 'type': 'public', 'username': 'sanjay123'}).then((response) => {
  //     //   console.log(response)
  //     // })
  //   })
  //   .catch((err) => {
  //     err.inner.forEach((ele) => {
  //       dispatch({type: 'field', field: `${ele.path}Error`, value: ele.message});
  //       // dispatch({ type: `${ele.path}Error`, value: ele.message });
  //       // if (ele.path === 'username') setUsernameError(ele.message);
  //       // if (ele.path === 'password') setPasswordError(ele.message);
  //       // console.log(ele.path, ele.message);
  //     });
  //   });
  //   };
  const validateData = () => {
    dispatch(resetErrors());
    schema.validate({ username, password }, { abortEarly: false })
        .then(() => {
            dispatch(loginRequest({username, password}))
              // apiHelper('post', 'https://api.taiga.io/api/v1/auth', {username, password, type: "normal"})
              //     .then(({data}) => {
              //         dispatch({ type: LOGIN_REDUCER.SET_USER_DETAILS, value: data });
              //         console.log("Success Login")
              //         // return <Redirect to='/dashboard/'  />
              //     })
              //     .catch((err) => {
              //       console.log("Error")
              //       console.log(err)
              //     })
        })
        .catch((err) => {
            err.inner.forEach((ele) => {
              dispatch(setErrors(ele));
                // dispatch({ type: `SET_${ele.path.toUpperCase()}_ERROR`, value: ele.message });
            });
        });
        //console.log(userDetails, "User Details");
    }


    if(userDetails.auth_token){
        //console.log('User Details')
        return (<Redirect to = '/dashboard'/>)
    }

    return (
        <LoginComponent validateData={validateData} dispatch={dispatch} username={username} password={password} usernameError={usernameError} passwordError={passwordError} logValues={logValues}/>
    );


  // return (<LoginComponent validateData={validateData} state={state} dispatch={dispatch} logValues={logValues} />)
  // return (<LoginComponent username = {username} password = {password} 
  //                         setUsername = {setUsername} setPassword = {setPassword} logValues = {logValues} validateData = {validateData} usernameError = {usernameError} passwordError = {passwordError} />)
}

export default LoginContainer;