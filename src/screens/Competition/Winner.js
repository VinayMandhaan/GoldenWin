import React, { useEffect, useState } from 'react'
import {
    View,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import {Avatar} from 'react-native-paper'
import HeaderTitle from '../../components/HeaderTitle'
var Data = [
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#2F3034'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#222226'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#2F3034'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#222226'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#2F3034'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#222226'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#2F3034'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#222226'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#2F3034'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#222226'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#2F3034'
    },
    {
        title:'David Dare Parker',
        subtitle:'Guru Pro, Australia',
        backgroundColor:'#222226'
    },
]

const Winner = (props) => {
    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <HeaderTitle title="COMPETITION WINNERS" navigation={props.navigation}/>
            <ScrollView>
            <View>
                {
                    Data.map(val=>(
                    <Card style={styles.cardStyles}>
                        <CardItem style={{backgroundColor:val.backgroundColor}}>
                        <Left>
                        <Avatar.Image size={55} source={require('../../assets/images/user.jpeg')} />
                            <Body>
                            <Text style={{color:'white'}}>{val.title}</Text>
                            <Text style={{fontSize:12,color:'white'}} note>{val.subtitle}</Text>
                            </Body>
                        </Left>
                        </CardItem>
                    </Card>
                    ))
                }
            </View>
            </ScrollView>
        </View>
        
    )
}

export default Winner

const styles = StyleSheet.create({
    cardStyles:{
        marginBottom:0,
        marginTop:0,
        marginRight:0, 
        marginLeft:0
    }
})