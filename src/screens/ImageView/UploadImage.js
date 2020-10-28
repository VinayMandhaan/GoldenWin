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
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import HeaderTitle from '../../components/HeaderTitle'
import ImgToBase64 from 'react-native-image-base64';
import firebase from '../../config'
let itemsRef = firebase.database().ref('/users');
import ImagePicker from 'react-native-image-crop-picker';
import * as Progress from 'react-native-progress';
import {useTheme} from '@react-navigation/native'

const UploadImage = (props) => {
    const {colors} = useTheme()
    const [imageUrl, setImageUrl] = useState(null)
    const [savedImg, setSavedImg] = useState(null)
    const [displayImage, setDisplayImage] = useState(false)
    const [imgProgress, setImgProgress] = useState(0)
    const handlePhoto = () => {
        // const options={
        //     noData:true
        // }
        // ImagePicker.launchImageLibrary(options,response => {
        //     if(response.uri){
        //         setImageUrl(response)
        //         console.log('RESPONSE',response.uri)
        //         ImgToBase64.getBase64String(response.uri)
        //         .then(base64String => setSavedImg(base64String), saveImageDb())
        //         .catch(err => doSomethingWith(err));
        //     }
        // })
        setImgProgress(0)
        ImagePicker.openPicker({
            width:1000,
            height:1000,
            cropping: true,
            compressImageQuality:0.7
          }).then(image => {
            console.log(image);
            setImageUrl(image.path)
            setImgProgress(100)
            setDisplayImage(true)
            
          });
    }

    const handleCrop = (img) => {
        setImgProgress(0)
        ImagePicker.openCropper({
            path: img,
            width:1000,
            height:1000,
          }).then(image => {
            console.log(image);
            setImageUrl(image.path)
            setImgProgress(1)
            setDisplayImage(true)
            
          });
    }

    // const saveImageDb = () => {
    //     var user = firebase.auth().currentUser
    //     var userId = null
    //     if(user){
    //         var userId = user.uid   
    //     }
    //     console.log(userId)
    //     firebase.database().ref('users/' + userId).once("value")
    //     .then((data)=>{
    //         const d = {...data.val()};
    //         if(d.hasOwnProperty('photoUrl')){
    //             d.photoUrl.push(savedImg)
    //         }else{
    //             d.photoUrl = [savedImg]
    //         }
    //         console.log('DATAAA',d)
    //         firebase.database().ref('users/'+userId).set(d).then((res)=>{
    //             console.log("Data Saved")
    //         })
    //     })
    //     // itemsRef.on('value', snapshot =>{
    //     //     var data = snapshot.val()
    //     //     var items = Object.values(data)
    //     //     console.log(items)
    //     //     items.map(val=>{
    //     //         console.log(val)
    //     //     })
    //     // })

    // }
    var imageSize = width - 20
    return(
        <View style={{flex: 1, backgroundColor:colors.containerColor}}>
            <HeaderTitle title="UPLOAD IMAGE" navigation={props.navigation}/>
            <View style={{alignSelf:'center'}}>
            {
                imageUrl ? (
                    <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', marginBottom:120}}>
                    <ImageBackground source={{uri:imageUrl}} style={{height:imageSize, width:imageSize}}>
                        <View style={{position:'absolute', right:5}}>
                            <TouchableOpacity onPress={()=>handleCrop(imageUrl)}>
                                <Feather name="edit" color="black" size={25}/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    </View>
                ) : 
                    <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop:-50}}>
                        <Icon name="image" color={colors.imgIcon} size={220}/>
                    </View>
            }
            </View>
            {/* <View style={imageUrl ? styles.activeButtonStyle : styles.inActiveButtonStyle}>
            <TouchableOpacity style={{width:300, padding:10}} onPress={()=>handlePhoto()}>
                <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>UPLOAD PHOTO</Text>
            </TouchableOpacity>
            </View> */}
            {/* {
                imageUrl && (
                <View style={{position:'absolute', bottom:0, backgroundColor:'#222226', width:'100%', borderTopRightRadius:10,borderTopLeftRadius:10}}>
                    <TouchableOpacity style={{padding:15}} onPress={()=>props.navigation.navigate('Payment')}>
                        <Text style={{textAlign:'center', fontWeight:'bold', color:'white'}}>Save Photo</Text>
                    </TouchableOpacity>
                </View>
                )
            } */}
          
            {
                displayImage ? 
                (
                    <View style={{position:'absolute', bottom:100, backgroundColor:'grey', alignSelf:'center', borderRadius:10}}>
                        <TouchableOpacity style={{padding:10, flexDirection:'row'}} onPress={()=>handlePhoto()}>
                            <Icon name="images" size={20} color="black" style={{marginRight:15}}/>
                            <Text style={{color:'white', fontSize:15}}>Change Photo</Text>
                        </TouchableOpacity>
                    </View>
                ):
                null
            }

            {
                displayImage ? 
                <View style={{position:'absolute', bottom:70, alignSelf:'center'}}>
                    <Progress.Bar color={colors.headerColor} unfilledColor="transparent" borderColor="#2F3034" animationType={"timing"} animated={true}  progress={imgProgress} width={200} />
                </View>
                : null
            }

            <View style={{position:'absolute', bottom:0, backgroundColor:colors.btnColor, width:'100%', borderTopRightRadius:10, borderTopLeftRadius:10}}>
                {
                    displayImage ? 
                    (
                        
                        <TouchableOpacity style={{alignItems:'center', padding:15, flexDirection:'row', justifyContent:'center'}} onPress={()=>props.navigation.navigate('Payment')}>
                            <Icon name="upload-to-cloud" color={colors.btnTxt} size={20} style={{marginRight:20}}/>
                            <Text style={{color:colors.btnTxt, fontWeight:'bold'}}>CONFIRM AND UPLOAD</Text>
                        </TouchableOpacity>
                    ):
                    (
                        <TouchableOpacity style={{alignItems:'center', padding:15}} onPress={()=>handlePhoto()}>
                            <Text style={{color:colors.btnTxt, fontWeight:'bold'}}>SELECT A PHOTO</Text>
                        </TouchableOpacity>
                    )
                }
                {/* <TouchableOpacity style={{alignItems:'center', padding:15}} onPress={()=>handlePhoto()}>
                    <Text style={{color:'white', fontWeight:'bold'}}>SELECT A PHOTO</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity style={{alignItems:'center', padding:15}} onPress={()=>handlePhoto()}>
                    <Text style={{color:'white', fontWeight:'bold'}}>CONFIRM AND UPLOAD</Text>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}

export default UploadImage

const styles = StyleSheet.create({
    activeButtonStyle:{
        alignSelf:'center', 
        backgroundColor:'#FDAA00', 
        borderRadius:10, 
        position:'absolute', 
        top:420
    },
    inActiveButtonStyle:{
        alignSelf:'center', 
        backgroundColor:'#FDAA00', 
        borderRadius:10, 
        position:'absolute', 
        top:350
    }
})