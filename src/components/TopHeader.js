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
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import {useTheme} from '@react-navigation/native'

const TopHeader = (props) => {
    const {colors} = useTheme()
    return(
        <View style={[props.loggedIn ? styles.mainHeader : styles.logoutView,{backgroundColor:colors.secondaryColor}]}>
        <View style={styles.arrowView}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Icon name="chevron-left" color="white" size={20}/>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default TopHeader

const styles = StyleSheet.create({
    mainHeader:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:10,
        backgroundColor:'#2F3034',
    },
    arrowView:{
        marginTop:5, 
        marginRight:15, 
        marginLeft:10
    },
    searchBar:{
        marginRight:25, 
        marginTop:10,
        width:250,
        height:30,
        backgroundColor:'white'
    },
    loginView:{
        flexDirection:'row',
        marginTop:15
    },
    logoutView:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:10,
        backgroundColor:'#2F3034',
        paddingTop:15
    }
})