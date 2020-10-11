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
var Data = [
    {
        url:require('../../assets/images/nature.jpeg')
    }  
]

const BestPhoto = (props) => {
    const { imgData } = props.route.params;
    console.log('IMAGE IN BEST PHOTO',imgData)
    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <VotingHeader navigation={props.navigation} />
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:15,marginBottom:15}}>
                <Icon name="check" color="white" size={20} style={{backgroundColor:'green', borderRadius:90/2}}/>
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold',fontSize:15, marginLeft:10}}>Selected Best Photo</Text>
            </View>
            <View style={{marginBottom:55}}>
                {
                    imgData.map(val=>(
                    <Card transparent style={{marginLeft:5,marginRight:5, marginTop:5}}>
                        <Image source={val.url} style={{height:height-420,width:'100%', borderRadius:10}}/>
                    </Card>
                    ))
                }
            </View>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Image source={require('../../assets/icons/bestphoto.png')} style={{width:60,height:60}}/>
                <View style={{flexDirection:'column', marginLeft:10,marginTop:10}}>
                <Text style={{color:'white',fontSize:18,textAlign:'center'}}> Judge GW Points</Text>
                    <Text style={{color:'white',fontSize:18, textAlign:'center',fontWeight:'bold'}}>250</Text>
                </View>
            </View>
            <View style={{position:'absolute', bottom:0, backgroundColor:'#222226', width:'100%', borderTopRightRadius:10,borderTopLeftRadius:10}}>
                <TouchableOpacity style={{padding:15}} onPress={()=>props.navigation.navigate('Main')}>
                    <Text style={{textAlign:'center', fontWeight:'bold', color:'white'}}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default BestPhoto