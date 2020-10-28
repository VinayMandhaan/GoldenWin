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
import RNSpeedometer from 'react-native-speedometer'
import {useTheme} from '@react-navigation/native'


const VoterGraph = (props) => {
  const {colors} = useTheme()
    const [fillGraph, setFillGraph] = useState(30)

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
            
            needleImage={require('../../assets/images/needle.png')}
            minValue={0} 
            maxValue={100}  
            size={props.size}  
            labelNoteStyle={{display:'none'}} 
            easeDuration={800}
            defaultValue={0}
            // halfCircleStyle={{backgroundColor:'#FE9700'}}
            innerCircleStyle={{backgroundColor:colors.voterInnerCircle}}
            labelStyle={{display:'none'}}
            
            labels={[
                  { 
                    activeBarColor: fillGraph > 5  ? colors.primaryColor : colors.secondaryColor,
                  },
                  {
                    activeBarColor: fillGraph >= 30 ? colors.primaryColor : colors.secondaryColor,
                  },
                  {
                    activeBarColor: fillGraph > 40  ? colors.primaryColor : colors.secondaryColor,
                  },
                  {
                    activeBarColor: fillGraph > 50  ? colors.primaryColor : colors.secondaryColor,
                  },
                  {
                    activeBarColor: fillGraph > 80  ? colors.primaryColor : colors.secondaryColor,
                  },
                  {
                    activeBarColor: fillGraph === 100  ? colors.primaryColor : colors.secondaryColor,
                  },
            ]}
            />
            <Text style={{textAlign:'center', fontWeight:'bold', color:'white'}}>{fillGraph}%</Text>
        </View>
    )
}

export default VoterGraph