import React, { useEffect, useState } from 'react'
import {
    View,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import HeaderTitle from '../../components/HeaderTitle'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import VoterGraph from '../../components/Competition/VoterGraph';
const ProgressComp = (props) => {
    const [fillCircle, setFillCircle] = useState(40)
    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <HeaderTitle title="IN PROGRESS COMPETITIONS" navigation={props.navigation}/>
            <Card style={{borderRadius:10, marginTop:-5}}>
                <ImageBackground source={require('../../assets/images/nature3.jpeg')} imageStyle={{borderRadius:10}} style={{height:height-500}}/>
            </Card>
            <View style={{marginTop:18, marginBottom:10}}>
                <Text style={{textAlign:'center', color:'white', fontSize:18}}>COMPETITION PROGRESS</Text>
            </View>
            <View style={{marginTop:10, alignSelf:'center', marginBottom:10}}>
                <VoterGraph size={200} textSize={20}/>
            </View>
        </View>
    )
}

export default ProgressComp