import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL, EMAIL_VERIFIED, FORGOT_PASSWORD, LOGOUT, LOADING, DARK_THEME} from '../actions/types'

const initalState={
    isAuthenticated: null,
    loading: true,
    sendVerificationEmail:null,
    showAppInfo:false,
    user: null,
    darkTheme:false
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
                showAppInfo:true,
                loading:false,
            }
        case LOADING:
            return{
                ...state,
                loading:payload
            }
        case DARK_THEME:
            return{
                ...state,
                darkTheme:payload
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
                showAppInfo:false,
                sendVerificationEmail:false
            }
       
        default:
            return state
        }
}
