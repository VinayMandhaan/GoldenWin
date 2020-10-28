import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import {connect} from 'react-redux'
import {logout,loading} from '.././../../actions/auth'
import firebase from '../../../config'
import PropTypes from 'prop-types'
import Toast from 'react-native-simple-toast';
const EmailVerify = (props) => {
    const logout = () => {
        props.logout()
    }
    var logger = false

    useEffect(()=>{
       
    })

    const isLogged = () => {
        const user = firebase.auth().currentUser;
        user.reload().then(() => {
        console.log({emailVerified: user.emailVerified})
        
        if(user.emailVerified){
            props.loading(true)
            props.loggedIn(true)
           
        }
        else{
            Toast.show('Email Not Verified', Toast.LONG);
        }
    })              
    }
    
    console.log(props.sendVerificationEmail)
    !props.sendVerificationEmail ? props.navigation.navigate('Signup') : null
    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <View style={{alignSelf:'center', top:300}}>
                <Text style={{color:'white', fontWeight:'bold',fontSize:20}}>Please Verify Your Email</Text>
                <TouchableOpacity onPress={isLogged}>
                    <Text style={{color:'white', fontWeight:'bold', textAlign:'center', marginTop:40, fontSize:15}}>Email Verified</Text>
                </TouchableOpacity>
            </View>
            <View style={{position:'absolute', top:10, right:10}}>
                <TouchableOpacity onPress={()=>logout()}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
EmailVerify.propTypes={
    loggedIn: PropTypes.func
}
const mapStateToProps = state => ({
    sendVerificationEmail : state.auth.sendVerificationEmail,
})


export default connect(mapStateToProps,{logout,loading})(EmailVerify);