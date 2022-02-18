import { USER_LOGGED_IN, CREATE_USER } from "../actions/actions";

const initialState = {
    isLoggedIn: false,
    userName: '',
    userPassword: ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_USER:
            const { name , password } = action.values;
            return {
                ...state,
                userName: name.split(' ').join(''),
                userPassword: password.split(' ').join('')
            }
        case USER_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true
            }
        default: return state
    }
}

export default userReducer;