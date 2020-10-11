import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL, EMAIL_VERIFIED, FORGOT_PASSWORD, LOGOUT, LOADING} from '../actions/types'

const initalState={
    isAuthenticated: null,
    loading: true,
    sendVerificationEmail:null,
    user: null
}

export default function(state = initalState, action){
    const {type, payload} = action
    switch(type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                ...payload,
                sendVerificationEmail:true,         
                loading:false       
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false,
            }
        case LOADING:
            return{
                ...state,
                loading:payload
            }
        case FORGOT_PASSWORD:
            return{
                ...state,
                ...payload
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            return {
                ...state,
                isAuthenticated:false,
                loading:false,
                sendVerificationEmail:false
            }
       
        default:
            return state
        }
}
