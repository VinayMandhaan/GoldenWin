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
    ActivityIndicator
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, ListItem, Switch, Separator, Radio, List } from 'native-base';



const SplashScreen = () =>{
    return(
        <View style={{flex:1, backgroundColor:'black'}}>
            <ImageBackground source={require('../assets/images/splash.jpg')} imageStyle={{opacity:0.5}} style={{flex:1}}>
                <View style={{alignSelf:'center', marginTop:150}}>
                    <Image source={require('../assets/images/applogo.png')} style={{width:200,height:100}}/>
                </View>
                <View style={{marginTop:200}}>
                    <ActivityIndicator color="white" size={50}/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen