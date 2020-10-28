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
import {useTheme} from '@react-navigation/native'


const HeaderTitle = (props) => {
    const {colors} = useTheme()
    return(
        <View style={{backgroundColor:colors.headerColor, borderTopRightRadius:20,borderTopLeftRadius:20}}>
           <View>
            <View>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{marginTop:22,marginLeft:5}}>
                    <Icon name="chevron-left" color={colors.textColor} size={25}/>
            </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center', marginTop:-40, paddingBottom:10}}>
                <Text style={{color:colors.textColor, textAlign:'center', fontWeight:'bold', padding:15, fontSize:18}}>{props.title}</Text>
            </View>
            </View>
        </View>
    )
}

export default HeaderTitle