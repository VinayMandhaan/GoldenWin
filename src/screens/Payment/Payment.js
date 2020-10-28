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
import Icon from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial'
import Feather from 'react-native-vector-icons/Feather'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';
import TopHeader from '../../components/TopHeader';
import {useTheme} from '@react-navigation/native'

const Payment = (props) => {
    const {colors} = useTheme()
    return(
        <View style={{backgroundColor:colors.containerColor, flex:1}}>
            <TopHeader navigation={props.navigation}/>
            <View style={{alignSelf:'center',marginTop:10}}>
                <Text style={styles.headingTxt}>Transfer Money</Text>
            </View>
            <View style={styles.paymentView}>
                {/* <View style={styles.paymentMethodStripe}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.navigation.navigate('PaymentDetails')}>
                        <Image source={require('../../assets/icons/stripe.png')} style={styles.paymentImg}/>
                        <Text style={styles.paymentTxt}>Stripe</Text>
                    </TouchableOpacity>
                </View> */}
                 <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.navigation.navigate('PaymentDetails')}>
                <View style={styles.paymentMethodPayPal}>
                    <Image source={require('../../assets/icons/paypal.png')} style={styles.paymentImg}/>
                    <Text style={styles.paymentTxt}>PayPal</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.navigation.navigate('CardDetails')}> 
                <View style={styles.paymentMethod}>
                    <Icon name="credit-card" size={40} color="#707070" style={{marginLeft:25}}/>
                    <Text style={styles.paymentTxt}>Credit Card</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Payment


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
        width:'100%',
        borderTopColor:'#707070',
        borderTopWidth:1,
        flexDirection:'row',
        borderBottomColor:'#707070',
        borderBottomWidth:1,
        paddingTop:15,
        paddingBottom:15,
    },
    paymentMethod:{
        width:'100%',
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
        marginTop:12, 
        color:'white',
        fontWeight:'bold',
        fontSize:18, 
        marginLeft:20
    }
})