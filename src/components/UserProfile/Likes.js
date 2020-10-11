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


const Likes = () => {
    return(
        <View style={{backgroundColor:'white', height:350}}>
            <View style={{alignSelf:'center', marginTop:50}}>
                <Icon name="heart" color="#AFAFAF" size={100}/>
            </View>
            <View style={{alignSelf:'center', marginTop:20}}>
                <Text style={{color:'#AFAFAF'}}>You haven't Liked any Photos Yet</Text>
            </View>
        </View>
    )
}

export default Likes