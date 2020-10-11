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
import Followers from './Followers';
import Following from './Following';
import Achievements from './Achievements';
import Likes from './Likes';
import UserGallery from './Gallery';
import CustomIcon from '../../../src/CustomIcon'
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
const UserProfileTabs = (props) => {
    const myIcon = (<Icon name="image" color="red" />)
    const [currentTab,setCurrentTab] = useState(0)
    return(
        <Tabs initialPage={currentTab} onChangeTab={({ i }) => setCurrentTab(i)}> 
        <Tab heading={
            <TabHeading style={{backgroundColor:'white', marginTop:-20, borderTopLeftRadius:25}}>
                <View style={{flexDirection:'column'}}>
                    <Icon name="image" color="grey" size={20} style={currentTab==0 ? styles.activeStyle:styles.inActiveStyle} />
                    <Text style={currentTab==0 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Win Photos</Text>
                </View>
            </TabHeading>
        }>
            <UserGallery navigation={props.navigation}/>
        </Tab>
        <Tab 
        heading={ 
        <TabHeading style={{backgroundColor:'white', marginTop:-20}}>
            <View style={{flexDirection:'column'}}>
                <Icon name="heart" color="grey" size={20} style={currentTab==1 ? styles.activeStyle:styles.inActiveStyle} />
                <Text style={currentTab==1 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Likes</Text>
            </View>
        </TabHeading>}>
            <Likes/>
        </Tab>
        <Tab 
        heading={ 
        <TabHeading style={{backgroundColor:'white', marginTop:-20}}>
            <View style={{flexDirection:'column'}}>
                <CustomIcon name="achievement" color="grey" size={20} style={currentTab==2 ? styles.activeStyle:styles.inActiveStyle} />
                <Text style={currentTab==2 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Achievements</Text>
            </View>
        </TabHeading>}>
            <Achievements/>
        </Tab>
        <Tab 
        heading={ 
        <TabHeading style={{backgroundColor:'white', marginTop:-20}}>
            <View style={{flexDirection:'column'}}>
                <CustomIcon name="following" color="grey" size={20} style={currentTab==3 ? styles.activeStyle:styles.inActiveStyle} />
                <Text style={currentTab==3 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Following</Text>
            </View>
            
        </TabHeading>}>
            <Following/>
        </Tab>
        <Tab 
        heading={ 
        <TabHeading style={{backgroundColor:'white', borderTopRightRadius:25, marginTop:-20}}>
            <View style={{flexDirection:'column'}}>
                <CustomIcon name="followers" color="grey" size={20} style={currentTab==4 ? styles.activeStyle:styles.inActiveStyle} />
                <Text style={currentTab==4 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Followers</Text>
            </View>
            
        </TabHeading>}>
            <Followers/>
        </Tab>
        </Tabs> 
      
    )
}

export default UserProfileTabs

const styles = StyleSheet.create({
    activeStyle:{
        color:'#FDAA00',
        alignSelf:'center'
    },
    inActiveStyle:{
        color:'grey',
        alignSelf:'center'
    },
    activeTxtStyle:{
        fontSize:8,
        color:'#FDAA00'
    },
    inActiveTxtStyle:{
        fontSize:8,
        color:'grey'

    }
})