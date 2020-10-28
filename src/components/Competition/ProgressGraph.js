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
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {useTheme} from '@react-navigation/native'

const ProgressGraph = (props) => {
    const {colors} = useTheme()
    const [fillCircle,setFillCircle] = useState(35)
    return(
        <View>
            <AnimatedCircularProgress
                size={props.size}
                width={props.graphWidth}
                fill={fillCircle}
                tintColor={colors.primaryColor}
                backgroundColor="#3d5875">
                {
                    (fill) => (
                    <>
                    <Text style={{color:'white', fontSize:props.textSize}}>
                        { fillCircle }
                    </Text>
                    <Text style={{color:'white',fontSize:props.textSize}}>
                        Participants
                    </Text>
                    </>
                    )
                }
            </AnimatedCircularProgress>
        </View>
    )
}

export default ProgressGraph