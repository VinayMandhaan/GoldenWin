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
    Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, ListItem, Switch, Separator, Radio, List } from 'native-base';
import HeaderTitle from '../components/HeaderTitle'
import firebase from '../config'
import {connect} from 'react-redux'
import {logout, loading} from '../actions/auth'
import SplashScreen from './SplashScreen';

const Settings = (props) => {
    const [notification, setNotification] = useState(false)
    const logout = () => {
        props.loading(true)
        props.logout()
    }
    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <HeaderTitle title="SETTINGS" navigation={props.navigation}/>
            <Content>
            <List style={{marginTop:20}}>
                <ListItem avatar style={{borderBottomWidth:0}}>
                <Left style={{borderBottomWidth:0}}>
                <Icon name="bell" color="white" size={20}/>
                </Left>
                <Body style={{borderBottomWidth:0}}>
                    <Text style={{color:'white', fontSize:15}}>Notification</Text>
                </Body>
                <Right style={{borderBottomWidth:0}}>
                    <Switch onValueChange={()=>setNotification(!notification)} value={notification}/>
                </Right>
                </ListItem>
            </List>
            <List style={{marginTop:20}}>
                <ListItem onPress={()=>logout()} avatar style={{borderBottomWidth:0}}>
                <Left style={{borderBottomWidth:0}}>
                    <Icon name="log-out" color="white" size={20}/>
                </Left>
                <Body style={{borderBottomWidth:0}}>
                    <Text style={{color:'white', fontSize:15}}>Logout</Text>
                </Body>
                <Right style={{borderBottomWidth:0}}>
                    <TouchableOpacity style={{marginRight:15}} onPress={()=>logout()}>
                        <Icon name="chevron-right" color="white" size={20}/>
                    </TouchableOpacity>
                </Right>
                </ListItem>
            </List>
        </Content>
        </View>
    )
}

const mapStateToProps = state => ({
    isLoading: state.auth.loading
})

export default connect(mapStateToProps,{logout, loading})(Settings);