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
import Icon from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';

var Data = [
    {
        title:'David Dare Parker',
        subtitle:'GURU PRO, Australia',
        img:require('../../assets/images/user.jpeg')
    },
    {
        title:'Johan Siggerson',
        subtitle:'GURU PRO, US',
       img:require('../../assets/images/user.jpeg')
    },
    {
        title:'Timothy Sutherland',
        subtitle:'GURU PRO, Australia',
       img:require('../../assets/images/user.jpeg')
    },
    {
        title:'Bryan Pereira',
        subtitle:'GURU PRO, Australia',
       img:require('../../assets/images/user.jpeg')
    },
    {
        title:'Oleg Zotov',
        subtitle:'GURU PRO, Australia',
        img:require('../../assets/images/user.jpeg')
    },
]

const Following = () => {
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
        <ScrollView>
        {
            Data.map(val=>(
            <Card style={{marginTop:0,marginLeft:0,marginRight:0}}>
                <TouchableOpacity>
                <CardItem>
                <Left>
                <Avatar.Image size={55} source={val.img} />
                    <Body style={{marginTop:8}}>
                        <Text>{val.title}</Text>
                        <Text note>{val.subtitle}</Text>
                    </Body>
                </Left>
                <Right>
                    <TouchableOpacity style={{backgroundColor:'#FDAA00', padding:10,borderRadius:25}}>
                        <Text style={{color:'white'}}>Follow</Text>
                    </TouchableOpacity>
                </Right>
                </CardItem>
                </TouchableOpacity>
            </Card>
             ))
        }
        </ScrollView>
        </View>
    )
}

export default Following