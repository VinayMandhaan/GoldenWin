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
import Ionicons from 'react-native-vector-icons/Ionicons'
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import ProfileCard from '../../components/UserProfile/ProfileCard'
import UserProfileTabs from '../../components/UserProfile/UserProfileTabs'
const UserProfile = (props) => {
    return(
        <>
            <ProfileCard navigation={props.navigation}/>
            <UserProfileTabs navigation={props.navigation}/>
        </>
    )
}


export default UserProfile