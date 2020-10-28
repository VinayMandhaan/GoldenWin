import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, Alert, StatusBar } from 'react-native';
import {Provider} from 'react-redux'
import store from './src/store'
import Routes from './src/routes/Routes'
import firebase from './src/config'
import {useTheme} from '@react-navigation/native'

export default function App() {
  const {colors} = useTheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    })
  })
    return(
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
}

