

import * as type from '../actions/actionType.js'

const initialState={
    allusers:[],
    currentUser:{},
    isLoggedIn:false
}

const newUsers = (state = initialState, action) => {
    switch(action.type) {
        case type.SIGNUP_USER:
            return {
                ...state,
                allusers: [...state.allusers, action.payload]
            };
            case type.LOGIN_USER:
            // console.log('Users:', state.allusers);
            // console.log('Login Payload:', action.payload);
          
            return {
                ...state,
                currentUser: action.payload,  
                isLoggedIn: true
            };

            case type.LOGOUT_USER:
                return {
                ...state,
                currentUser:{  } ,
                isLoggedIn: false
        }
            

        default:
            return state;
    }
};

export default newUsers;