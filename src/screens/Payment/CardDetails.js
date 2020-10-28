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
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';
import TopHeader from '../../components/TopHeader'
import {useTheme} from '@react-navigation/native'

const CardDetails = (props) => {
    const {colors} = useTheme()
    return(
        <View style={{backgroundColor:colors.containerColor, flex:1}}>
            <TopHeader navigation={props.navigation}/>
            <View style={styles.paymentView}>
                <View style={[styles.paymentMethodPayPal, {backgroundColor:colors.paymentHeader}]}>
                    <Icon name="credit-card" size={40} color="#707070" style={{marginLeft:20}}/>
                    <Text style={[styles.paymentTxt, {color:colors.btnTxt}]}>Credit Card Details</Text>
                </View>
                <View style={{marginTop:40}}>
                        <Input
                            placeholder='Enter Card Number'
                            inputContainerStyle={{ width: width - 30, borderWidth: 1, borderColor: "#fff", borderRadius: 20, borderBottomWidth: 0, borderLeftWidth: 0 }}
                            inputStyle={{ textAlign: "center", color: "#fff", fontFamily: "SegoeUI", fontSize: 16, marginRight:-20 }}
                            rightIconContainerStyle={{ marginRight: 20 }}
                            secureTextEntry={true}
                            rightIcon={
                                <Icon
                                    name='credit-card'
                                    size={24}
                                    color='#fff'
                                />
                            }
                        />  
                        <Input
                            placeholder='CVV'
                            leftIconContainerStyle={{ marginLeft: 20 }}
                            inputContainerStyle={{ width: width - 30, borderWidth: 1, borderColor: "#fff", borderRadius: 20, borderRightWidth: 0, marginTop: -28}}
                            inputStyle={{ textAlign: "center", color: "#fff", fontFamily: "SegoeUI", fontSize: 16, marginLeft:-50 }}
                            secureTextEntry={true}
                            leftIcon={
                                <MaterialIcons
                                    name='lock'
                                    size={24}
                                    color='#fff'
                                />
                            }
                        />
                        <TouchableOpacity onPress={handleLogin}>
                            <View style={styles.submitBtn}>
                                <Text style={styles.submitBtnTxt}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

export default CardDetails


const styles = StyleSheet.create({
    headingTxt:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
    paymentView:{
        position:'absolute',
        top:250,
        width:'100%'
    },
    paymentMethodStripe:{
        flexDirection:'row',
        borderTopColor:'#707070',
        borderTopWidth:1,
        borderBottomColor:'#707070',
        borderBottomWidth:1,
        paddingTop:15,
        paddingBottom:15
    },
    paymentMethodPayPal:{
        flexDirection:'row',
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#414244'
    },
    paymentMethod:{
        flexDirection:'row',
        borderBottomColor:'#707070',
        borderBottomWidth:1,
        paddingTop:15,
        paddingBottom:15
    },
    paymentImg:{
        width:60,
        height:50,
        marginLeft:20
    },
    paymentTxt:{
        marginTop:10, 
        color:'white',
        fontWeight:'bold',
        fontSize:18, 
        marginLeft:20
    },
    submitBtn:{ 
        marginTop: -28, 
        width: width - 30, 
        borderWidth: 1, 
        borderTopWidth: 0, 
        borderColor: "#fff", 
        borderRadius: 20, 
        borderLeftWidth: 0, 
        alignSelf: "center" 
    },
    submitBtnTxt:{ 
        color: "#fff", 
        padding: 14, 
        fontSize: 16, 
        alignSelf: "center", 
        fontFamily: "SegoeUI" 
    },
})