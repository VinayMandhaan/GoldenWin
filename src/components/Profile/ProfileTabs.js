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
import Icon from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col } from 'native-base';
import ProfileAchievement from './ProfileAchievement';
import ProfileGallery from './ProfileGallery';




const ProfileTabs = (props) => {
    return(
        <View>
            <ProfileGallery navigation={props.navigation}/>
        </View>
    )
}

export default ProfileTabs