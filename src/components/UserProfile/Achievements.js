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
import Graph from './Graph';

const Achievements = () => {
    const [activePhotographer, setActivePhotographer] = useState(true)
    const [activeVoter, setActiveVoter] = useState(false)

    const changePhotographer = () =>{
        setActivePhotographer(!activePhotographer)
        setActiveVoter(false)
    }

    const changeVoter = () => {
        setActiveVoter(!activeVoter)
        setActivePhotographer(false)
    }
    return(
        <View style={{flex:1, backgroundColor:'white', marginBottom:5}}>
            <ScrollView>
            <View>
                <TouchableOpacity onPress={()=>changePhotographer()}>
                    <Text style={activePhotographer ? styles.activeTextStyle : styles.inActiveTextStyle}>Photographer</Text>
                </TouchableOpacity>
            </View>
            <View style={{position:'absolute', top:0, right:0}}>
                <TouchableOpacity onPress={()=>changeVoter()}>
                    <Text style={activeVoter ? styles.activeTextStyle : styles.inActiveTextStyle}>Voter</Text>
                </TouchableOpacity>
            </View>
            {
                activePhotographer ?
                <View>
                    <Text style={{marginLeft:15, fontWeight:'bold'}}>Nature GW Points (8000)</Text> 
                <View style={{flexDirection:'row', margin:10}}>
                    <Image source={require('../../assets/images/Green.png')} style={{width:100,height:70, marginRight:10}}/>
                    <Image source={require('../../assets/images/Certificate.png')} style={{width:80,height:70, marginRight:10}}/>
                </View> 
                <View>
                    <Graph/>
                </View>
                </View>
                : null
            
            }

            {
                activeVoter ? 
                <View>
                    <Text style={{marginLeft:15, fontWeight:'bold'}}>Nature GW Points (95000)</Text> 
                <View style={{flexDirection:'row', margin:10}}>
                    <Image source={require('../../assets/images/skilled.png')} style={{width:80,height:70, marginRight:10}}/>
                    <Image source={require('../../assets/images/popular.png')} style={{width:80,height:70, marginRight:10}}/>
                </View>
                <View>
                    <Graph/>
                </View>
                </View>
                : null
            }

            </ScrollView>
        </View>
    )
}

export default Achievements

const styles = StyleSheet.create({
    activeTextStyle:{
        color:'#FDAA00', 
        fontWeight:'bold',
        margin:10
    },
    inActiveTextStyle:{
        color:'black',
        fontWeight:'bold',
        margin:10
    }
});