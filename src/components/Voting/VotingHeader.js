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
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';

const VotingHeader = (props) => {
    return(
        <View>
            <ImageBackground source={require('../../assets/images/nature6.jpeg')} style={{height:120}}>
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Main')} style={{alignSelf:'flex-start', marginTop:8, marginLeft:5}}>
                    <Icon name="chevron-left" color="white" size={25}/>
                </TouchableOpacity>
                <View style={{marginTop:-5}}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'bold', textAlign:'center'}}>Nature</Text>
                    <Text style={{color:'white', fontSize:18, textAlign:'center', fontWeight:'bold'}}>Travel</Text> 
                    <Text style={{color:'white', fontSize:20, textAlign:'center'}}>Competition</Text>  
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}

export default VotingHeader