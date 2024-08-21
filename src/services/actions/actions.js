import * as type from './actionType.js'

export const signUp=(userData)=>{
    return{
        type:type.SIGNUP_USER,
        payload: userData
    }
}

export const logIn=(userData)=>{
    return{
        type:type.LOGIN_USER,
        payload: userData        
    }
}
export const logOut=()=>{
    return{
        type:type.LOGOUT_USER
    }
}