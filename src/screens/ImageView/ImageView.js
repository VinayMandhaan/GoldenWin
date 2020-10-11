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
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import TopHeader from '../../components/TopHeader'
import firebase from '../../config'

const ImageView = (props) => {
    const { imgData } = props.route.params;
    const [isLoggedIn,setIsLoggedIn] = useState(false)
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
        <View style={{flex:1,backgroundColor:'#2F3034'}}>
            <TopHeader navigation={props.navigation} loggedIn={isLoggedIn}/>
            <ImageBackground source={imgData} imageStyle={{borderRadius:25}} style={{height:height-400}}>
                <View style={{position:'absolute', top:10, right:15}}>
                    <Icon name="share" size={30} color="white"/>
                </View>
                {/* <View style={styles.userIconView}>
                    <Icon name="user" color="white" size={20} style={styles.userIcon}/>
                </View> */}
                {/* <View style={styles.avatarView}>
                    <Avatar.Image size={45} source={require('../../assets/images/user.jpeg')} />
                </View> */}
            </ImageBackground>
                <View>
                <Card transparent>
                <CardItem style={{backgroundColor:'#2F3034'}}>
                <Left>
                    <View style={styles.userImgView}>
                        <Avatar.Image size={95} source={require('../../assets/images/user.jpeg')} />
                    </View>
                    <Body style={{marginTop:-20}}>
                    <Text style={styles.userTitle}>Golden Win</Text>
                    <Text note style={styles.userSubTitle}>12.9 k followers</Text>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <Icon name="trophy" color="#FDAA00" size={18}/>
                        <Text style={{color:'white', marginLeft:5}}>43,925</Text>
                    </View>
                    {/* <View style={{flexDirection:'row',marginTop:5}}>
                        <Icon name="star" color="#FDAA00"/>
                        <Icon name="star" color="#FDAA00"/>
                        <Icon name="star" color="#FDAA00"/>
                        <Icon name="star" color="#FDAA00"/>
                    </View> */}
                    </Body>
                </Left>
                </CardItem>
                {/* <CardItem style={{backgroundColor:'#2F3034'}}>
                    <Text style={{color:'white'}}>A beautiful sunset at Baltic Sea with a flying seagulls</Text>
                </CardItem> */}
                <CardItem style={styles.userInfoCard}>
                    <View style={{flexDirection:'row', marginLeft:30}}>
                        {/* <Text style={styles.userInfoTxt}>Info</Text> */}
                        <Text style={styles.userInfoTxt}>Published</Text>
                        <Text style={styles.userInfoTxt}>Views</Text>
                        <Text style={styles.userInfoTxt}>Downloads</Text>
                        <Text style={styles.userInfoTxt}>Likes</Text>
                    </View>
                </CardItem>
                <CardItem style={styles.imgDetailsCard}>
                    <View style={{flexDirection:'row', marginLeft:35}}>
                        {/* <Text style={styles.imgDetails}>Info</Text> */}
                        <Text style={styles.imgDetails}>Aug 4,19</Text>
                        <Text style={styles.imgDetails}>23044</Text>
                        <Text style={styles.imgDetails}>544</Text>
                        <Text style={styles.imgDetails}>200</Text>
                    </View>
                </CardItem>
            </Card>
            </View>
            {
                isLoggedIn ? 
                <View style={styles.btnView}>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', alignSelf:'center'}}>
                            <Text style={styles.btnTxt}>Download</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                : null
            }
            
        </View>
    )
}

export default ImageView


const styles = StyleSheet.create({
    userIconView:{
        position:'absolute',
        top:0,
        marginLeft:10,
        marginTop:10
    },
    userIcon:{
        backgroundColor:'#FDAA00',
        marginRight:5,
        borderRadius:60/2,
        padding:10
    },
    avatarView:{
        position:'absolute',
        top:0,
        right:0,
        marginTop:10,
        marginRight:10
    },
    userImgView:{
        marginTop:-30,
        borderRadius:160/2,
        padding:10,
        borderColor:'#2F3034',
        borderWidth:15
    },
    userTitle:{
        color:'white',
        fontSize:18
    },
    userSubTitle:{
        color:'#4A4A4A'
    },
    userInfoCard:{
        backgroundColor:'#2F3034',
        alignSelf:'center',
        marginBottom:-15,
       
    },
    userInfoTxt:{
        color:'#4A4A4A',
        textAlign:'center',
        marginRight:25
    },
    imgDetailsCard:{
        backgroundColor:'#2F3034',
        alignSelf:'center',
    },
    imgDetails:{
        color:'white',
        marginRight:40
    },
    btnView:{
        width:'95%', 
        height:50,
        justifyContent:'center',
        alignItems:'center', 
        position:'absolute', 
        bottom:0, 
        backgroundColor:'white',
        borderRadius:10, 
        alignSelf:'center',
        marginBottom:10
    },
    btnTxt:{
        color:'black',
        fontSize:15,
        fontWeight:'bold'
    }

})