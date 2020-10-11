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
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import firebase from '../../config'
firebase.firestore().settings({ experimentalForceLongPolling: true });
var db = firebase.firestore()

const HeaderBar = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                if(user.emailVerified){
                    setIsLoggedIn(true)
                }
            } else {
              setIsLoggedIn(false)
            }
          });
          getUserDetails()
    })

    const getUserDetails = () => {
        var user = firebase.auth().currentUser
        if(user){
            var userId = user.uid
        }
        db.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               if(userId == doc.id){
                   setUserName(doc.data().name)
               }
            });
        });
    }

    return(
        <View style={isLoggedIn ?  styles.mainHeader : styles.logoutView}>
        <View style={styles.arrowView}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Icon name="chevron-left" color="white" size={20}/>
            </TouchableOpacity>
        </View>
            
        <Item rounded style={isLoggedIn ? styles.loginSearchBar: styles.searchBar}>
            <MaterialIcons name="search" color="black" size={20} />
            <Input placeholder="" style={{width:120}}/>
        </Item>
        {
            !isLoggedIn ?  
            <View style={styles.loginView}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.navigation.navigate('Login')}>
                    <Text style={{color:'white', marginRight:5}}>Login</Text>
                <Icon name="user" color="#FDAA00" size={20}/>
                </TouchableOpacity>
            </View>
            : 
            <View style={styles.loginView}>
                {/* <Text style={{color:'white', marginRight:5}}>{userName.split(' ')[0]}</Text>
                <Icon name="user" color="#FDAA00" size={20}/> */}
            </View>            
        }
       
        </View>
    )
}

export default HeaderBar

const styles = StyleSheet.create({
    mainHeader:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:10,
    },
    arrowView:{
        marginTop:15, 
        marginRight:15, 
        marginLeft:10
    },
    searchBar:{
        marginRight:25, 
        marginTop:10,
        width:width-120,
        height:30,
        backgroundColor:'white'
    },
    loginView:{
        flexDirection:'row',
        marginTop:15,
        marginLeft:-12
    },
    logoutView:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:10,
        paddingTop:15
    },
    loginSearchBar:{
        marginRight:25,
        marginTop:10,
        width:width-60,
        height:30,
        backgroundColor:'white'
    }
})