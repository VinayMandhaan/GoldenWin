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
import ProgressGraph from '../../components/Competition/ProgressGraph';
const EnrolledComp = (props) => {
    const [fillCircle, setFillCircle] = useState(40)
    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <HeaderTitle title="ENROLLED COMPETITIONS" navigation={props.navigation}/>
            <Card style={{borderRadius:10, marginTop:-5}}>
                <ImageBackground source={require('../../assets/images/nature3.jpeg')} imageStyle={{borderRadius:10}} style={{height:height-500}}/>
            </Card>
            <View style={{marginTop:18, marginBottom:10}}>
                <Text style={{textAlign:'center', color:'white', fontSize:18}}>COMPETITION PROGRESS</Text>
            </View>
            <View style={{marginTop:10, alignSelf:'center', marginBottom:10}}>
                <ProgressGraph size={200} textSize={20} graphWidth={25}/>
            </View>
            <View style={{width:'100%', height:50,justifyContent:'center',alignItems:'center', position:'absolute', bottom:0, backgroundColor:'#222226', borderTopRightRadius:15,borderTopLeftRadius:15}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="log-out" color="white" size={20}/>
                        <Text style={{color:'white', fontSize:15, marginLeft:5}}>EXIT COMPETITION</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EnrolledComp