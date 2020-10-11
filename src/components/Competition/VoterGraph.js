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
// import Speedometer from 'react-native-speedometer-chart';
import RNSpeedometer from 'react-native-speedometer'


const VoterGraph = (props) => {
    const [fillGraph, setFillGraph] = useState(35)

    // useEffect(()=>{
    //     var id = setInterval(() => {
    //         setFillGraph(35)
    //     }, 2000)
        
    // },[])

    return(
        <View>
            <Text style={{textAlign:'center', marginBottom:5, color:'white'}}>Vote Progress</Text>
            <RNSpeedometer 
            value={fillGraph} 
            minValue={0} 
            maxValue={100}  
            size={props.size}  
            labelNoteStyle={{display:'none'}} 
            easeDuration={800}
            defaultValue={0}
            // halfCircleStyle={{backgroundColor:'#FE9700'}}
            innerCircleStyle={{backgroundColor:'white'}}
            labelStyle={{display:'none'}}
            labels={[
                  { 
                    activeBarColor: fillGraph > 5  ? '#FE9700' : '#2F3034',
                  },
                  {
                    activeBarColor: fillGraph > 20 ? '#FE9700' : '#2F3034',
                  },
                  {
                    activeBarColor: fillGraph > 30  ? '#FE9700' : '#2F3034',
                  },
                  {
                    activeBarColor: fillGraph > 50  ? '#FE9700' : '#2F3034',
                  },
                  {
                    activeBarColor: fillGraph > 80  ? '#FE9700' : '#2F3034',
                  },
                  {
                    activeBarColor: fillGraph === 100  ? '#FE9700' : '#2F3034',
                  },
            ]}
            />
            <Text style={{textAlign:'center', fontWeight:'bold', color:'white'}}>{fillGraph}%</Text>
        </View>
    )
}

export default VoterGraph