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
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';

const Story = () => {
    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <View style={{flexDirection:'row'}}>
                <View style={{backgroundColor:'white', borderRadius:20,borderWidth:1}}>
                    
                </View>
            </View>
            <View style={{marginTop:70, marginLeft:10}}>
                <Avatar.Image size={55} source={require('../assets/images/user.jpeg')} />
            </View>
            <View style={{marginTop:20}}>
                <Card transparent style={{marginLeft:0,marginRight:0}}>
                    <Image source={require('../assets/images/nature.jpeg')} style={{height:300,width:'100%', borderRadius:10}}/>
                </Card>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize:20}}>Art</Text>
            </View>
        </View>

    )
}

export default Story