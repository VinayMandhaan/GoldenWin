import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import ProfileHeader from './ProfileHeader';
import firebase from '../../config'
import UserProfileTabs from './UserProfileTabs';
firebase.firestore().settings({ experimentalForceLongPolling: true });
var db = firebase.firestore()

const ProfileCard = (props) => {
    const [username, setUsername] = useState('')
    useEffect(()=>{
        getUserData()
    },[])
    const getUserData = () => {
        var user = firebase.auth().currentUser
        if(user){
            var userId = user.uid
        }
        db.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               if(userId == doc.id){
                setUsername(doc.data().name)
               }
            });
        });
    }

    return(
        <>
        <ImageBackground source={require('../../assets/images/nature5.jpeg')} style={{height:300}}>
            <ProfileHeader navigation={props.navigation}/>
            <Card transparent>
            <CardItem style={{backgroundColor:'transparent'}}>
              <Left>
                <Avatar.Image size={85} source={require('../../assets/images/user.jpeg')} />
                <Body>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>{username}</Text>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Icon name="location-pin" color="#FDAA00" size={20}/>
                        <Text style={{color:'white', marginLeft:5}}>New York, USA</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Icon name="trophy" color="#FDAA00" size={18}/>
                        <Text style={{color:'white', marginLeft:5}}>49,425</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Icon name="wallet" color="#FDAA00" size={18}/>
                        <Text style={{color:'white', marginLeft:5}}>78</Text>
                    </View>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{backgroundColor:'transparent'}}>
                <View style={{position:'absolute',right:0, flexDirection:'row', bottom:40}}>
                    <Image source={require('../../assets/images/professional.png')} style={{width:60, height:60, marginRight:10}}/>
                    <Image source={require('../../assets/images/judge.png')} style={{width:40, height:60, marginRight:10}}/>
                </View>
            </CardItem>
            <CardItem style={{backgroundColor:'transparent', marginTop:20}}>
                <View style={{position:'absolute', left:0, marginLeft:10}}>
                    <Text style={{color:'white', textAlign:'center', fontSize:18, fontWeight:'bold'}}>17K</Text>
                    <Text style={{color:'white', textAlign:'center'}}>Followers</Text>
                </View>
                <View style={{position:'absolute', right:0,left:0}}>
                    <Text style={{color:'white',textAlign:'center', fontSize:18,fontWeight:'bold'}}>387</Text>
                    <Text style={{color:'white',textAlign:'center'}}>Following</Text>
                </View>
                <View style={{position:'absolute', right:0, marginRight:10}}>
                    <TouchableOpacity style={{backgroundColor:'#FDAA00', borderRadius:30, paddingRight:25, paddingLeft:25,paddingTop:5,paddingBottom:5}}>
                        <Text style={{color:'white'}}>2000$</Text>
                    </TouchableOpacity>
                </View>
            </CardItem>
            </Card>
        </ImageBackground>
        </>
    )
}

export default ProfileCard