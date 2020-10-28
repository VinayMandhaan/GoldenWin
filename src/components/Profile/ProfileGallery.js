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
    FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col } from 'native-base';
import firebase from '../../config'

var Data = [
    {
        img:require('../../assets/images/nature.jpeg')
    },
    {
        img:require('../../assets/images/nature1.jpeg')
    },
    {
        img:require('../../assets/images/nature2.jpeg')
    },
    {
        img:require('../../assets/images/camera.jpeg')
    }
]

const ProfileGallery = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const tabletHeight = 180
    const mobileHeight = 120
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
    })
    return(
        <View>
            <FlatList
                data={Data}
                renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('ImageView',{
                        imgData:item.img
                    })}>
                    <ImageBackground
                            style={{height:width > 600 ? tabletHeight : mobileHeight,width:'100%'}}
                            source={item.img}
                            imageStyle={{borderRadius:10}}
                    >
                        {/* {
                            isLoggedIn ? 
                            <View style={{position:'absolute', bottom:3, right:0, flexDirection:'row'}}>
                             <View style={{backgroundColor:'#FDAA00', borderRadius:90/2, padding:4, marginRight:3, marginBottom:3, opacity:0.7}}>
                                 <Text style={{color:'white', fontSize:8, fontWeight:'bold'}}>20</Text>
                             </View>
                             <View style={{backgroundColor:'#FDAA00', borderRadius:90/2, padding:4, marginRight:3, marginBottom:3, opacity:0.7}}>
                                 <Text style={{color:'white', fontSize:8, fontWeight:'bold'}}>15</Text>
                             </View>
                             <View style={{backgroundColor:'#FDAA00', borderRadius:90/2, padding:4, marginRight:3, marginBottom:3, opacity:0.7}}>
                                 <Text style={{color:'white', fontSize:8, fontWeight:'bold'}}>11</Text>
                             </View>
                        </View>   
                        : null
                        } */}
                        
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
                )}
                //Setting the number of column
                numColumns={width > 600 ? 4 : 3}
                keyExtractor={(item, index) => index.toString()}
            />            
        </View>
    )
}

export default ProfileGallery