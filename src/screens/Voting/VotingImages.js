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
import Icon from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial'
import Feather from 'react-native-vector-icons/Feather'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';
import VotingHeader from '../../components/Voting/VotingHeader';
import TopHeader from '../../components/TopHeader'
import BestPhoto from './BestPhoto';
// var Data = [
//     {
//         id:1,
//         url:require('../../assets/images/nature.jpeg')
//     },
//     {
//         id:2,
//         url:require('../../assets/images/nature1.jpeg')
//     },
//     {
//         id:3,
//         url:require('../../assets/images/nature2.jpeg')
//     },
//     {
//         id:4,
//         url:require('../../assets/images/camera.jpeg')
//     },
//     {
//         id:5,
//         url:require('../../assets/images/camera1.jpeg')
//     },    
// ]
var counter = 1;
const VotingImages = (props) => {
    var { Data } = props.route.params;
    const [bestImage, setBestImage] = useState([])
    const [selectedImages, setSelectedImages] = useState([])
    const [runOnce,setRunOnce] = useState(true)
    useEffect(()=>{
        setSelectedImages([]);
        console.log('USE EFFECT')
        getImages()
    },[runOnce])

    const getImages = async() => { 
        if(bestImage.length===0){
            console.log("set best image")
            await setBestImage(Data)
        }
        bestImage.slice(0,2).map(val=>{
            setSelectedImages(selectedImages => [...selectedImages, val])
        })
        if(runOnce === false && counter ===2){
            console.log("Came in the if")
            await Data.splice(0,2)
            setBestImage(Data)
        }
        counter +=1;
        await setRunOnce(false)
    }

    const getTopImages = async(id, index) => {
        console.log("Data",Data)
        console.log("BEST",bestImage)
        var array = [...selectedImages]
        var i = index === 1 ? 0 : 1
        
        if(bestImage.length>0){
            array[i]=bestImage[0]
            await Data.splice(0,1);
            setBestImage(Data)
        }
        else{
            var topImg = [selectedImages[index]]
            console.log(selectedImages[index])
            setSelectedImages([])
            setBestImage([])
            props.navigation.navigate('BestPhoto',{
                imgData:topImg
            })
           
            
        }
        setSelectedImages(array)
    
    }

    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <VotingHeader navigation={props.navigation}/>
            <ScrollView>
            <View>
                {
                    selectedImages.map((val,index)=>(
                    <Card transparent style={{marginLeft:5,marginRight:5, marginTop:20}}>
                        <TouchableOpacity onPress={()=>getTopImages(val.id, index)}>
                            <ImageBackground key={val.id} source={val.url} style={{height:250,width:'95%', borderRadius:10, alignSelf:'center', marginLeft:15}}>
                                {/* {
                                    val.clicked ? 
                                    <View>
                                        <Icon name="check" color="white" size={18} style={{backgroundColor:'green', borderRadius:90/2}}/>
                                    </View> : null
                                } */}
                            </ImageBackground>
                        </TouchableOpacity>
                    </Card>
                    ))
                }
            </View>
            </ScrollView>
            <View style={{width:'100%', height:50,justifyContent:'center',alignItems:'center',position:'absolute', bottom:0, backgroundColor:'white', borderTopRightRadius:10,borderTopLeftRadius:10}}>
                <TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'black', fontSize:15, marginLeft:5, fontWeight:'bold'}}>Select your prefered</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default VotingImages