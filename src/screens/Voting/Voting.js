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
    FlatList,
    Modal,
    TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';
import VotingHeader from '../../components/Voting/VotingHeader';
import {useTheme} from '@react-navigation/native'
// var Data = [
//     {
//         id:1,
//         url:require('../../assets/images/nature.jpeg'),
//         clicked:false
//     },
//     {
//         id:2,
//         url:require('../../assets/images/nature1.jpeg'),
//         clicked:false
//     },
//     {
//         id:3,
//         url:require('../../assets/images/nature2.jpeg'),
//         clicked:false
//     },
//     {
//         id:4,
//         url:require('../../assets/images/camera.jpeg'),
//         clicked:false
//     },
//     {
//         id:5,
//         url:require('../../assets/images/camera1.jpeg'),
//         clicked:false
//     },
//     {
//         id:6,
//         url:require('../../assets/images/camera2.jpeg'),
//         clicked:false
//     },
//     {
//         id:7,
//         url:require('../../assets/images/nature.jpeg'),
//         clicked:false
//     },
//     {
//         id:8,
//         url:require('../../assets/images/nature1.jpeg'),
//         clicked:false
//     },
//     {
//         id:9,
//         url:require('../../assets/images/nature2.jpeg'),
//         clicked:false
//     },
//     {
//         id:10,
//         url:require('../../assets/images/camera.jpeg'),
//         clicked:false
//     },
    
// ]
const Voting = (props) => {
    const {colors} = useTheme()
    const tabletHeight = 180
    const mobileHeight = 120
    var [data, setData] = useState([
        {
            id:1,
            url:require('../../assets/images/nature.jpeg'),
            clicked:false
        },
        {
            id:2,
            url:require('../../assets/images/nature1.jpeg'),
            clicked:false
        },
        {
            id:3,
            url:require('../../assets/images/nature2.jpeg'),
            clicked:false
        },
        {
            id:4,
            url:require('../../assets/images/camera.jpeg'),
            clicked:false
        },
        {
            id:5,
            url:require('../../assets/images/camera1.jpeg'),
            clicked:false
        },
        {
            id:6,
            url:require('../../assets/images/camera2.jpeg'),
            clicked:false
        },
        {
            id:7,
            url:require('../../assets/images/photography.jpeg'),
            clicked:false
        },
        {
            id:8,
            url:require('../../assets/images/nature5.jpeg'),
            clicked:false
        },
        {
            id:9,
            url:require('../../assets/images/nature6.jpeg'),
            clicked:false
        },
        {
            id:10,
            url:require('../../assets/images/camera3.jpeg'),
            clicked:false
        },
        {
            id:11,
            url:require('../../assets/images/nature8.jpg'),
            clicked:false
        },
        {
            id:12,
            url:require('../../assets/images/laptop.jpg'),
            clicked:false
        }
    ])
    const [votingImages, setVotingImages] = useState([])
    const [validateButton, setValidateButton] = useState(false)
    const [unselect, setUnselect] = useState(false)
    const [fiveImages, setFiveImages] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [displayScroll, setDisplayScroll] = useState(false)
    const [fullImg, setFullImg] = useState('')
    const selectTopImages = (val) => {
        
        // console.log('ID',val.id)
        // console.log('VALUE',val)
        if(votingImages.includes(val)){
            var index = votingImages.indexOf(val)
            console.log('INDEX', index)
            val.clicked = false
            votingImages.splice(index,1)
            console.log('BEFORE UNSELECT', unselect)
            setUnselect(!unselect)
            console.log('AFTER UNSELECT', unselect)
            return console.log('DUPLICATE VOTING IMAGES',votingImages)
        }else{
            if(fiveImages){
                setVotingImages(votingImages => [...votingImages,val])
                val.clicked = true
                console.log('VOTING IMAGES',votingImages)
                console.log(votingImages.length)
                
                //   if(votingImages.length === 3){
                //       setValidateButton(true)
                //       setFiveImages(false)
                // }

            //     props.navigation.navigate('VotingImages',{
            //     Data:votingImages
            // })
        }
        }
        // setVotingImages(votingImages => [...votingImages, val])
        // console.log('VOTING IMAGES',votingImages)
        // console.log(votingImages.length)
        // if(votingImages.length === 5){
        //    props.navigation.navigate('VotingImages',{
        //        Data:votingImages
        //    })
        // }
    }
    
    const LongPress = (img) => { 
        setShowModal(true)
        setFullImg(img)
        console.log('LONG')
    }

    const onRelease = () => {
        setShowModal(false)
        console.log('RELEASED')
    }

    const find_dimesions = (width,height) => {
        const deviceHeight = Dimensions.get("window").height;
        const deviceWidth = Dimensions.get("window").width;
        const contentHeight = deviceHeight - 50
        console.log(" view width:" + width + "  " + "view height:" + height);
        console.log(
            "device width:" + deviceWidth + "  " + " device height:" + deviceHeight
        );
        if(height > contentHeight - 50){
            setDisplayScroll(true)
        }else{
            setDisplayScroll(false)
        }
    }


    return(
       
        <View style={{flex:1, backgroundColor:'white'}} >
        <ScrollView>
            { showModal ? 
           
            <Modal
                transparent={true}
                animationType={'fade'}
                visible={showModal}
                onRequestClose={()=>onRelease()}
            >
               <TouchableWithoutFeedback onPress={()=>onRelease()}>
                <View style={{backgroundColor:'rgba(255,255,255,0.7)', flex:1}}>
                <View style={{position:'absolute', top:10, right:10}}>
                    {/* <TouchableOpacity onPress={()=>onRelease()}>
                        <Icon name="cross" color="black" size={20}/>
                    </TouchableOpacity> */}
                </View>
                <View style={{position:'absolute', top:height-580, width:'100%', backgroundColor:'black', paddingTop:15}}>
                    {/* <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{props.navigation.navigate('ImageView',{
                        imgData:fullImg
                    }) , setShowModal(false)}}>
                        <Text style={{fontSize:20, marginBottom:20, fontWeight:'bold'}}>View Full Image</Text>
                        <Icon name="images" size={25} style={{marginLeft:20}}/>
                    </TouchableOpacity> */}
                    <TouchableWithoutFeedback>
                    <View>
                        <Image source={fullImg} style={{height:320, width:'98%', alignSelf:'center'}}/>
                    </View>
                    </TouchableWithoutFeedback>
                    <View style={{alignItems:'center', marginTop:15}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Report Abuse</Text>
                        <MaterialIcons name="report" color="white" size={25} style={{marginLeft:40, marginBottom:10}}/>
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
                </TouchableWithoutFeedback>
                
            </Modal>: null
            }
            <VotingHeader navigation={props.navigation}/>
            <View style={{margin:10, alignSelf:'center', marginBottom:20}}>
                <Text style={{fontWeight:'bold'}}>Select Top 5 Images</Text>
            </View>
            <Card style={{borderRadius:10, marginTop:-8, marginLeft:0,marginRight:0, marginBottom:90}}>
            <FlatList
                data={data}
                onContentSizeChange={(width, height) => {
                    find_dimesions(width,height)
                }}
                renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                    {/* <TouchableOpacity onPress={()=>setData(
                        data.map(val=>(
                            val.id == item.id
                            ? {...val, clicked:true} : val
                        )), selectTopImages(item)
                    )}> */}
                    <TouchableOpacity onLongPress={()=>LongPress(item.url)} onPress={()=>selectTopImages(item)}>
                        <ImageBackground
                            style={{height:width > 600 ? tabletHeight : mobileHeight,width:'100%', borderRadius:10}}
                            source={item.url}
                        >
                            { 
                                votingImages && votingImages.map(v=>(
                                    v.id == item.id ? 
                                    v.clicked ? (
                                        <View style={{position:'absolute', top:0, left:0}}>
                                           <Icon name="check" color="white" size={18} style={{backgroundColor:'green', borderRadius:90/2}}/>
                                        </View> ): null : null
                                ))
                                
                            }
                            
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                )}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
            />
            {
                displayScroll ? 
                (
                <View style={{position:'absolute', bottom:height-600, alignItems:'center', width:'100%'}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('VotingImages',{
                    Data:votingImages})}>
                    <Feather name="chevrons-down" color="white" size={20} style={{textAlign:'center'}}/>   
                    <Text style={{color:'white'}}>Scroll To Confirm Your Selection</Text>         
                </TouchableOpacity>
                </View>
                ):
                null
            }
            </Card>
            {
                votingImages.length === 5 ? 
                <View style={{position:'absolute', bottom:0 ,backgroundColor:colors.btnColor, width:'100%', borderTopRightRadius:10, borderTopLeftRadius:10}}>
                {/* <TouchableOpacity onPress={()=>props.navigation.navigate('VotingImages',{
                    Data:votingImages})}>
                    <Feather name="chevrons-down" color="black" size={20} style={{textAlign:'center'}}/>   
                    <Text>Scroll To Confirm Your Selection</Text>         
                </TouchableOpacity> */}
                <TouchableOpacity style={{alignItems:'center', padding:10}} onPress={()=>props.navigation.navigate('VotingImages',{
                    Data:votingImages})}>
                    <Text style={{color:colors.btnTxt, fontWeight:'bold'}}>Confirm To Continue</Text>
                </TouchableOpacity>
                </View> : null 
            }
            </ScrollView> 

        </View>
        
    )


}

export default Voting