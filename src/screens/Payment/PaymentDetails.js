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
import Lightbox from 'react-native-lightbox';
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';
import TopHeader from '../../components/TopHeader'
const PaymentDetails = (props) => {
    return(
        <View style={{backgroundColor:'#2F3034', flex:1}}>
            <TopHeader navigation={props.navigation}/>
            <View style={styles.paymentView}>
                <View style={styles.paymentMethodPayPal}>
                    <Image source={require('../../assets/icons/paypal.png')} style={styles.paymentImg}/>
                    <Text style={styles.paymentTxt}>PayPal</Text>
                </View>
                <View style={{marginTop:40}}>
                        <Input
                            placeholder='name@example.com'
                            inputContainerStyle={{ width: width - 30, borderWidth: 1, borderColor: "#fff", borderRadius: 20, borderBottomWidth: 0, borderLeftWidth: 0 }}
                            inputStyle={{ textAlign: "center", color: "#fff", fontFamily: "SegoeUI", fontSize: 16, marginRight:-20 }}
                            rightIconContainerStyle={{ marginRight: 20 }}
                            rightIcon={
                                <Zocial
                                    name='email'
                                    size={24}
                                    color='#fff'
                                />
                            }
                        />  
                        <Input
                            placeholder='password'
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

export default PaymentDetails


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
        marginTop:15, 
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