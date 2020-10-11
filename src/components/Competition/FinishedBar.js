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
    Button
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Divider from 'react-native-divider';
import * as Progress from 'react-native-progress';

const FinishedBar = () => {
    const [firstPick, setFirstPick] = useState(0.3)
    const [topPick, setTopPick] = useState(0.5)
    return(
        <View>
            <View style={{marginBottom:10}}>
                <Text style={{color:'white', fontSize:12, marginBottom:5}}>First Pick</Text>
                <Progress.Bar borderRadius={0} borderColor="#FFFFFF" height={10} progress={firstPick} width={100} color="#FDAA00" />
            </View>
            <View>
                <Text style={{color:'white', fontSize:12, marginBottom:5}}>Top Five Pick</Text>
                <Progress.Bar borderRadius={0} borderColor="#FFFFFF" height={10} progress={topPick} width={100} color="#FDAA00" />
            </View>
        </View>
    )
}

export default FinishedBar