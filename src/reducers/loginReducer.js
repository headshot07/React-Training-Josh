import {LOGIN_REDUCER} from '../shared/actionConstants'
const initialState = {
    username: "",
    password: "",
    userDetails: {},
    usernameError: null,
    passwordError: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REDUCER.RESET_ERRORS:
            return { ...state, usernameError: null, passwordError: null }
        case LOGIN_REDUCER.SET_USERNAME:
            return { ...state, username: action.value }
        case LOGIN_REDUCER.SET_PASSWORD:
            return { ...state, password: action.value }
        case LOGIN_REDUCER.SET_USERNAME_ERROR:
            return { ...state, usernameError: action.value };
        case LOGIN_REDUCER.SET_USER_DETAILS:
            return { ...state, userDetails: action.value }
        case LOGIN_REDUCER.SET_PASSWORD_ERROR:
            return { ...state, passwordError: action.value }
        default:
            return state
    }
}

export default loginReducer;
export {initialState};


// const LoginReducer = (state, action) => {
//   switch (action.type) {
//     case 'reset-errors': {
//         return {
//             ...state,
//             usernameError: null,
//             passwordError: null,
//         };
//     }
//     case 'field': {
//         return {
//             ...state,
//             [action.field]: action.value,
//         };
//     }
//     default:
//         break;
// }
// return state;
// }

// export default LoginReducer;