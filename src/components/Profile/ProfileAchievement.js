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
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col } from 'native-base';


const ProfileAchievement = () => {
    return(
        // <View>
        //     <View style={{marginLeft:90,marginTop:20,flexDirection:'row'}}>
        //         <Image source={require('../../assets/images/Green.png')} style={{width:100,height:70}}/>
        //         <Image source={require('../../assets/images/Certificate.png')} style={{width:80,height:70, alignSelf:'center', marginLeft:40}}/>
        //     </View>
        //     <View style={{marginLeft:90,marginTop:20,flexDirection:'row'}}>
        //         <Image source={require('../../assets/images/skilled.png')} style={{width:80,height:70}}/>
        //         <Image source={require('../../assets/images/popular.png')} style={{width:80,height:70, alignSelf:'center', marginLeft:60}}/>
        //     </View> 
        // </View>
        <View style={{position:'absolute',right:0, flexDirection:'row', bottom:40}}>
            <Image source={require('../../assets/images/professional.png')} style={{width:60, height:60, marginRight:10}}/>
            <Image source={require('../../assets/images/judge.png')} style={{width:40, height:60, marginRight:10}}/>
        </View>
    )
}

export default ProfileAchievement