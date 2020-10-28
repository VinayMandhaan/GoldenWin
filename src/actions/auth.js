import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, EMAIL_VERIFIED, FORGOT_PASSWORD, LOGOUT, LOADING, DARK_THEME } from './types'
import firebase from '../config'
import Toast from 'react-native-simple-toast';
firebase.firestore().settings({ experimentalForceLongPolling: true });
var db = firebase.firestore()

export const loading = (flag) => async dispatch => {
    dispatch({
        type: LOADING,
        payload: flag
    })
}

export const changeAppTheme = (flag) => async dispatch => {
    dispatch({
        type: DARK_THEME,
        payload:flag
    })
}


export const login = (email, password) => async dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        if (res) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res
            })
        }
    }).catch(err => {
        console.log(err.message)
        dispatch({
            type: LOADING,
            paylod: false
        })
        Toast.show(err.message, Toast.LONG);


    })
}

export const send_verfication_email = (email,password,name,id) => async dispatch => {
    console.log('EMAIL SENT TO USERRR')
    firebase.auth().currentUser.sendEmailVerification().then(function (val) {
        console.log('EMAIL VERIFICATION SENT TO USERRR')
        // firebase.database().ref('/users/' + id).set({
        //     email: email,
        //     name: name,
        //     uid: id
        // })
        dispatch({
            type: REGISTER_SUCCESS
        })
    }).catch(function (error) {
        console.log(error)
    })
}

export const register = (email, password, name) => async dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (response) {

        // firebase.database().ref('/users/' + response.user.uid).set({
        //     email: email,
        //     name: name,
        //     uid: response.user.uid
        // }).then(res => {
        //     dispatch(send_verfication_email(email,password,name,response.user.uid))
        //     dispatch({
        //         type: REGISTER_SUCCESS,
        //         payload: res
        //     })
        // })
        // dispatch(send_verfication_email(email,password,name,response.user.uid))
        // dispatch({
        //     type:REGISTER_SUCCESS,
        // })
        
        db.collection("users").doc(`${response.user.uid}`).set({
            email: email,
            name: name,
            uid:response.user.uid
        })
        .then(function(docRef) {
            dispatch(send_verfication_email(email,password,name,response.user.uid))
            dispatch({
                type:REGISTER_SUCCESS,
            })
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    }).catch(err => {
        console.log(err.message)
        dispatch({
            type: LOADING,
            payload: false
        })
        Toast.show(err.message, Toast.LONG);
    })
}

export const forgot_password = (email) => async dispatch => {
    firebase.auth().sendPasswordResetEmail(email).then(function (res) {
        dispatch({
            type: FORGOT_PASSWORD,
            payload: res
        })
    }).catch(function (err) {
        console.log(err)
    })
}

export const logout = () => async dispatch => {

    firebase.auth().signOut().then(res => {
        dispatch({
            type: LOGOUT
        })
    })
}
