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
import {Avatar, Snackbar} from 'react-native-paper'
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import ProfileTabs from '../../components/Profile/ProfileTabs'
import HeaderBar from '../../components/Profile/HeaderBar'
import ProfileAchievement from '../../components/Profile/ProfileAchievement';
import firebase from '../../config'
// let itemsRef = firebase.database().ref('/users');
firebase.firestore().settings({ experimentalForceLongPolling: true });
var db = firebase.firestore()
const Data = [
    {
        name:'Golden Win',
        location:'New York, USA',
        achievements:'49.925'
    },
    {
        name:'Golden Win',
        location:'New York, USA',
        achievements:'49.925'
    },
    {
        name:'Golden Win',
        location:'New York, USA',
        achievements:'49.925'
    }
]

const Profile = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [users, setUsers] = useState([])
    // const [users, setUsers] = useState([])
    // const [userId, setUserId] = useState(null)
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                if(user.emailVerified){
                    setIsLoggedIn(true)
                }else{
                    setIsLoggedIn(false)
                }
            }
        })
        // getProfileData()
        // getFollowers()
    },[])

    // const getProfileData = () => {
    //     var user = firebase.auth().currentUser
    //     if(user){
    //         setUserId(user.uid)
    //     }
    //     itemsRef.on('value', snapshot =>{
    //         var data = snapshot.val()
    //         var items = Object.values(data)
    //         setUsers(items)
    //     })
    // }

    // const followUser = (id) => {
    //     var user = firebase.auth().currentUser
    //     var userId = null
    //     if(user){
    //         var userId = user.uid   
    //     }
    //     firebase.database().ref('users/' + id).once("value")
    //     .then((data)=>{
    //         const d = {...data.val()};
    //         if(d.hasOwnProperty('followers')){
    //             d.followers.push(userId)
    //         }else{
    //             d.followers = [userId]
    //         }
    //         firebase.database().ref('users/' + id).set(d).then((res)=>{
    //             console.log("Data Saved")
    //         })
    //     })
    //     following(id)
    // }

    // const getFollowers = () => {
    //     var user = firebase.auth().currentUser
    //     var userId = null
    //     if(user){
    //         var userId = user.uid
    //     }
    //     users.map(val=>{
    //         val.followers.map(s=>{
    //             console.log('Followers',s)
    //         })
    //     })
    // }

    // const following = (id) => {
    //     var user = firebase.auth().currentUser
    //     var userId = null
    //     if(user){
    //         var userId = user.uid   
    //     }
    //     firebase.database().ref('users/' + userId).once("value")
    //     .then((data)=>{
    //         const d = {...data.val()};
    //         if(d.hasOwnProperty('following')){
    //             d.following.push(id)
    //         }else{
    //             d.following = [id]
    //         }
    //         firebase.database().ref('users/' + userId).set(d).then((res)=>{
    //             console.log("Data Saved")
    //         })
    //     })
    // }

    // const removeFollowers = (id) => {
    //     var user = firebase.auth().currentUser
    //     var userId = null
    //     if(user){
    //         var userId = user.uid
    //     }
    //     firebase.database().ref("users/" + id).once("value")
    //     .then((data)=>{
    //         const d = {...data.val()}
    //         if(d.hasOwnProperty('followers')){
    //             var index = d.followers.indexOf(userId)
    //             if(index !== -1){
    //                 d.followers.splice(index,1)
    //             }
    //         }
    //         firebase.database().ref('users/' + id).set(d).then((res)=>{
    //             console.log('Follower Removed')
    //             unfollow(id)
    //         })
    //     })
    // }

    // const unfollow = (id) => {
    //     var user = firebase.auth().currentUser
    //     var userId = null
    //     if(user){
    //         var userId = user.uid
    //     }
    //     firebase.database().ref("users/" + userId).once("value")
    //     .then((data)=>{
    //         const d = {...data.val()}
    //         if(d.hasOwnProperty('following')){
    //             var index = d.following.indexOf(id)
    //             if(index !== -1){
    //                 d.following.splice(index,1)
    //             }
    //         }
    //         firebase.database().ref('users/' + userId).set(d).then((res)=>{
    //             console.log('Following Removed')
    //         })
    //     })
    // }


    // const getData = () => {
    //     db.collection("users").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.data())
    //         })
    //     });
    // }

    return(
       
        <View style={{flex:1,backgroundColor:'#2F3034'}}>
          <HeaderBar navigation={props.navigation}/>
            <ScrollView>
        {
            Data.map(val=>(
            <View style={{height:420, marginBottom:42}}>
                <Card transparent>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}>
                <CardItem style={{backgroundColor:'#2F3034'}}>
                <Left>
                <Avatar.Image size={75} source={require('../../assets/images/user.jpeg')} />
                    <Body style={{borderTopWidth:0, borderBottomWidth:0}}>
                    <Text style={{color:'white', marginTop:10, fontSize:15, marginLeft:2}}>{val.name}</Text>
                        <View style={{flexDirection:'row', marginTop:5}}>
                            <Icon name="location-pin" color="#FDAA00" size={20}/>
                            <Text style={{color:'white', marginLeft:5}}>New York, USA</Text>
                        </View>
                        {
                            isLoggedIn ? 
                            (
                            <>
                            {/* <View style={{flexDirection:'row', marginTop:5}}>
                                <Icon name="trophy" color="#FDAA00" size={18}/>
                                <Text style={{color:'white', marginLeft:5}}>49.925</Text>
                            </View> */}
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Icon name="camera" color="#FDAA00" size={18}/>
                                <Text style={{color:'white', marginLeft:5}}>49.925</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Icon name="thumbs-up" color="#FDAA00" size={18}/>
                                <Text style={{color:'white', marginLeft:5}}>32.925</Text>
                            </View>
                            </>
                            ):(
                            <>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Icon name="camera" color="#FDAA00" size={18}/>
                                <Text style={{color:'white', marginLeft:5}}>49.925</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:5}}>
                                <Icon name="thumbs-up" color="#FDAA00" size={18}/>
                                <Text style={{color:'white', marginLeft:5}}>32.925</Text>
                            </View>
                            </>
                        )}
                        
                    </Body>
                </Left>
                </CardItem>
                </TouchableOpacity>
                <CardItem style={{backgroundColor:'transparent'}}>
                    <ProfileAchievement/>
                </CardItem>
                {
                    isLoggedIn ? 
                    <CardItem style={{backgroundColor:'transparent', marginBottom:10}}>
                        <View style={{position:'absolute', left:10, flexDirection:'row'}}>
                            <Icon name="users" color="#FDAA00" size={15} style={{marginRight:10}}/>
                            <Text style={{color:'#FDAA00', fontWeight:'bold', textAlign:'center'}}>Followers: 120</Text>
                        </View>
                        <View style={{position:'absolute', right:10}}>
                            <TouchableOpacity style={{width:60, backgroundColor:'#FDAA00', borderRadius:10, padding:5}}>
                                <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </CardItem>
                    : null
                }

               
                {/* { isLoggedIn ?  val.uid !== userId ? 
                <CardItem style={{backgroundColor:'transparent', marginBottom:10}}>
                    <View style={{position:'absolute', right:10}}>
                        {
                           val.followers ? val.followers.map(v=>(
                                v == userId ?
                            <>
                            <TouchableOpacity onPress={()=>removeFollowers(val.uid)} style={{width:150, backgroundColor:'#FDAA00', borderRadius:10, padding:5}}>
                                <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>UnFollow</Text>
                            </TouchableOpacity>
                            </>
                            :
                            <>
                            <TouchableOpacity onPress={()=>followUser(val.uid)} style={{width:150, backgroundColor:'#FDAA00', borderRadius:10, padding:5}}>
                                <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>Follow</Text>
                            </TouchableOpacity>
                            </>
                            ))
                            : 
                            
                            <View>
                            <TouchableOpacity onPress={()=>followUser(val.uid)} style={{width:150, backgroundColor:'#FDAA00', borderRadius:10, padding:5}}>
                                <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>Follow</Text>
                            </TouchableOpacity>
                            </View>
                        }

                    </View>
                </CardItem>
                : null : null
                } */}
                </Card>
                <ProfileTabs navigation={props.navigation}/>
            </View>
            ))    
        }
        </ScrollView>
        </View>
    )
}

export default Profile
