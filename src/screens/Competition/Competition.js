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
    Button,
    StatusBar
} from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import ActiveCard from '../../components/Competition/ActiveCard'
import OpenCard from '../../components/Competition/OpenCard';
import ProgressCard from '../../components/Competition/ProgressCard';
import Finished from '../../components/Competition/Finished';
import {useTheme} from '@react-navigation/native'


const Competition = (props) => {
    const {colors} = useTheme()
    return(
        <View style={{flex:1}}>
        <ScrollView>
        <Tabs tabBarUnderlineStyle={{height:2,justifyContent:'center', backgroundColor:colors.underlineColor}}>
          <Tab heading="Active" textStyle={{color:'white'}} activeTextStyle={{color:'white'}} tabStyle={{ backgroundColor: colors.containerColor }} activeTabStyle={{ backgroundColor: colors.containerColor }} style={{backgroundColor:colors.containerColor}}>
            <ActiveCard navigation={props.navigation}/>
          </Tab>
          <Tab heading="Open" textStyle={{color:'white'}} activeTextStyle={{color:'white'}} tabStyle={{ backgroundColor: colors.containerColor }} activeTabStyle={{ backgroundColor: colors.containerColor }} style={{backgroundColor:colors.containerColor}}>
            <OpenCard navigation={props.navigation}/>
          </Tab>
          <Tab heading="In Progress" textStyle={{color:'white'}} activeTextStyle={{color:'white'}} tabStyle={{ backgroundColor: colors.containerColor }} activeTabStyle={{ backgroundColor: colors.containerColor }} style={{backgroundColor:colors.containerColor}}>
            <ProgressCard navigation={props.navigation}/>
          </Tab>
          <Tab heading="Finished" textStyle={{color:'white'}} activeTextStyle={{color:'white'}} tabStyle={{ backgroundColor: colors.containerColor }} activeTabStyle={{ backgroundColor: colors.containerColor }} style={{backgroundColor:colors.containerColor}}>
            <Finished navigation={props.navigation}/>
          </Tab>
        </Tabs>
        </ScrollView>
        </View>
    )
}

export default Competition

