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
const HeaderTitle = (props) => {
    return(
        <View style={{backgroundColor:'#FE9700', borderTopRightRadius:20,borderTopLeftRadius:20}}>
           <View>
            <View>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{marginTop:22,marginLeft:5}}>
                    <Icon name="chevron-left" color="white" size={25}/>
            </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center', marginTop:-40, paddingBottom:10}}>
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold', padding:15, fontSize:18}}>{props.title}</Text>
            </View>
            </View>
        </View>
    )
}

export default HeaderTitle