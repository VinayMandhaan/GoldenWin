import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, Alert, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../CustomIcon'
import firebase from '../config'
import {connect} from 'react-redux'
import {loading} from '.././actions/auth'
import {Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'

import store from '../store'
// Importing Screens

// Auth Screens
import Login from '../screens/Auth/Login/login'
import Signup from '../screens/Auth/Signup/signup'
import ForgotPassword from '../screens/Auth/ForgotPassword/ForgotPassword'

//Tab Navigations
import Competition from '../screens/Competition/Competition';
import TopPicks from '../screens/TopPicks/TopPicks'
import Winner from '../screens/Competition/Winner'
import EnrolledComp from '../screens/Competition/EnrolledComp'
import ImageView from '../screens/ImageView/ImageView'
import UserProfile from '../screens/UserProfile/UserProfile'
import Voting from '../screens/Voting/Voting'
import VotingImages from '../screens/Voting/VotingImages'
import Profile from '../screens/Profiles/Profiles'
import BestPhoto from '../screens/Voting/BestPhoto'
import Payment from '../screens/Payment/Payment'
import PaymentDetails from '../screens/Payment/PaymentDetails';
import Settings from '../screens/Settings'
import Story from '../screens/Story'
import UploadImage from '../screens/ImageView/UploadImage'
import SplashScreen from '../screens/SplashScreen'
import EmailVerify from '../screens/Auth/EmailVerify/EmailVerify'
import CardDetails from '../screens/Payment/CardDetails'
import ProgressComp from '../screens/Competition/ProgressComp'
import PhotoEditor from '../screens/ImageView/PhotoEditor'
import StickyHeader from '../components/UserProfile/StickyHeader'
import AppInfo from '../screens/AppInfo/AppInfo'
import {useTheme} from '@react-navigation/native'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
// const myTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: "#2F3034"
//   }
// }

const customDefaultTheme = {
  ...DefaultTheme,
  ...PaperDarkTheme,
  colors:{
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    tabColor:'#FDAA00',
    textColor:'white',
    background:'#2F3034',
    containerColor:'#2F3034',
    headerColor:'#FDAA00',
    headerTxt:'white',
    btnColor:'#FDAA00',
    btnTxt:'white',
    iconColor:'white',
    iconSelectedColor:'black',
    underlineColor:'#FDAA00',
    tabContentColor:'white',
    followingTabColor:'white',
    followingTabText:'black',
    imgIcon:'black',
    primaryColor:'#FDAA00',
    secondaryColor:'#2F3034',
    voterInnerCircle:'white',
    userTabs:'white',
    paymentHeader:'#414244',
    statusBar:'#2F3034'
  }
}

const customDarkTheme = {
  ...DarkTheme,
  ...PaperDarkTheme,
  colors:{
    ...DarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "black",
    tabColor:'white',
    textColor:'black',
    containerColor:'black',
    headerColor:'white',
    headerTxt:'black',
    btnColor:'white',
    btnTxt:'black',
    iconColor:'grey',
    iconSelectedColor:'black',
    underlineColor:'white',
    tabContentColor:'black',
    followingTabColor:'black',
    followingTabText:'white',
    imgIcon:'white',
    primaryColor:'white',
    secondaryColor:'black',
    voterInnerCircle:'#FDAA00',
    userTabs:'black',
    paymentHeader:'white',
    statusBar:'black'
  }
}



function tabNavigation(){
  const {colors} = useTheme()
  return(
      <Tab.Navigator tabBarOptions={{style:[styles.tabBarStyles, {backgroundColor:colors.tabColor}]}}>
        <Tab.Screen name="Competition" component={Competition} options={{tabBarLabel: '',
        tabBarIcon: ({focused}) => (
            <View style={{width:55}}>
                  <CustomIcon name="flag" color={focused ? colors.iconSelectedColor : colors.iconColor} size={focused ? 65 : 55} style={{marginTop:5}}/>
            </View>
            
        )}}/>
        <Tab.Screen name="Profile" component={StickyHeader} options={{tabBarLabel: '',
        tabBarIcon: ({focused}) => (
          <View style={{width:55}}>
            <CustomIcon name="user_circle" color={focused ? colors.iconSelectedColor : colors.iconColor} size={focused ? 65 : 55} style={{marginTop:5}}/>
          </View>
          
        )}}/>
        <Tab.Screen name="Users" component={Profile} options={{tabBarLabel: '',
        tabBarIcon: ({focused}) => (
          <View style={{width:55}}>
            <CustomIcon name="user" color={focused ? colors.iconSelectedColor : colors.iconColor} size={focused ? 65 : 55} style={{marginTop:5}}/>
          </View>
        )}}/>
        <Tab.Screen name="TopPicks" component={TopPicks} options={{tabBarLabel: '',
        tabBarIcon: ({focused}) => (
          <View style={{width:55}}>
            <CustomIcon name="top_picks" color={focused ? colors.iconSelectedColor : colors.iconColor} size={focused ? 65 : 55} style={{marginTop:5}}/>
          </View>
        )}}/>
        <Tab.Screen name="Settings" component={Settings} options={{tabBarLabel: '',
        tabBarIcon: ({focused}) => (
          <View style={{width:55}}>
            <CustomIcon name="settings1" color={focused ? colors.iconSelectedColor : colors.iconColor} size={focused ? 65 : 55} style={{marginTop:5}}/>
          </View>
        )}}/>
      </Tab.Navigator>
  )
}


function Routes(props) {
  console.log('PROPS',props)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAuth,setIsAuth] = useState(false)
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  useEffect(()=>{
    console.log('SHOW APP INFOOOOOOOOOO',props.showAppInfo)
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
        props.loading(false)
        // console.log(user)
        if(user.emailVerified){
          setIsLoggedIn(true)
          props.loading(false)
          setIsEmailVerified(true)
        }
        } else {
          props.loading(false)
          setIsLoggedIn(false)
          setIsEmailVerified(false)
      }
    });
  },[isAuth])
  const  loggedIn = (value)=>{
    setIsAuth(!isAuth);
  }

  const myTheme = props.isDark ? customDarkTheme : customDefaultTheme
  return (
    <PaperProvider theme={myTheme}> 
    <StatusBar translucent={isLoggedIn ? false:true} backgroundColor={isLoggedIn ? props.isDark ? 'black' :'#2F3034' : 'transparent'} />
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator>
        {
          props.isLoading ?  
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/> :  
          props.showAppInfo === true ? 
          <>
          <Stack.Screen name="AppInfo" component={AppInfo} options={{headerShown:false}}/>
          <Stack.Screen name="Main" component={tabNavigation} options={{headerShown:false}}/>
          <Stack.Screen name="ImageView" component={ImageView} options={{headerShown:false}}/>
          <Stack.Screen name="Voting" component={Voting} options={{headerShown:false}}/>
          <Stack.Screen name="Enrolled" component={EnrolledComp} options={{headerShown:false}}/>
          <Stack.Screen name="ProgressComp" component={ProgressComp} options={{headerShown:false}}/>
          <Stack.Screen name="Winner" component={Winner} options={{headerShown:false}}/>
          <Stack.Screen name="VotingImages" component={VotingImages} options={{headerShown:false}}/>
          <Stack.Screen name="BestPhoto" component={BestPhoto} options={{headerShown:false}}/>
          <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}/>
          <Stack.Screen name="PaymentDetails" component={PaymentDetails} options={{headerShown:false}}/>
          <Stack.Screen name="CardDetails" component={CardDetails} options={{headerShown:false}}/>
          <Stack.Screen name="UploadImage" component={UploadImage} options={{headerShown:false}}/>
          </>
          :
          isLoggedIn ? 
          (
            <>
              
              <Stack.Screen name="Main" component={tabNavigation} options={{headerShown:false}}/>
              <Stack.Screen name="ImageView" component={ImageView} options={{headerShown:false}}/>
              <Stack.Screen name="Voting" component={Voting} options={{headerShown:false}}/>
              <Stack.Screen name="Enrolled" component={EnrolledComp} options={{headerShown:false}}/>
              <Stack.Screen name="ProgressComp" component={ProgressComp} options={{headerShown:false}}/>
              <Stack.Screen name="Winner" component={Winner} options={{headerShown:false}}/>
              <Stack.Screen name="VotingImages" component={VotingImages} options={{headerShown:false}}/>
              <Stack.Screen name="BestPhoto" component={BestPhoto} options={{headerShown:false}}/>
              <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}/>
              <Stack.Screen name="PaymentDetails" component={PaymentDetails} options={{headerShown:false}}/>
              <Stack.Screen name="CardDetails" component={CardDetails} options={{headerShown:false}}/>
              <Stack.Screen name="UploadImage" component={UploadImage} options={{headerShown:false}}/>
            </>
            ):(
            <>
              <Stack.Screen name={"Login"}  options={{ headerShown: false }}>
                {props => <Login {...props} loggedIn={(value)=>{loggedIn(value)}} />}
              </Stack.Screen>
              <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
              <Stack.Screen name="Users" component={Profile} options={{headerShown:false}}/>
              <Stack.Screen name="ImageView" component={ImageView} options={{headerShown:false}}/>
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
              {/* <Stack.Screen name="EmailVerify" component={EmailVerify} options={{headerShown:false}}/> */}
              <Stack.Screen name={"EmailVerify"}  options={{ headerShown: false }}>
                {props => <EmailVerify {...props} loggedIn={(value)=>{loggedIn(value)}} />}
              </Stack.Screen>
            </>
          )
        }

        
       
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  tabBarStyles:{
    backgroundColor:'#FDAA00', 
    borderTopRightRadius:10, 
    borderTopLeftRadius:10, 
    marginTop:-10,
  },
  splashTab:{
    display:'none'
  }
})
const mapStateToProps = state => ({
  isLoading: state.auth.loading,
  showAppInfo : state.auth.showAppInfo,
  isDark: state.auth.darkTheme

})

export default connect(mapStateToProps,{loading})(Routes);

