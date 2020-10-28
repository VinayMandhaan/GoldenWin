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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
var Data = [
    {
        title:'Nature',
        category:'Environment',
        participants:'75%',
        price:'50$',
        free:true,
        img:require('../../assets/images/camera1.jpeg')
    },
    {
        title:'Nature',
        category:'Animals',
        participants:'55%',
        price:'50$',
        free:false,
        img:require('../../assets/images/photography.jpeg')
    },
    {
        title:'Nature',
        category:'Travel',
        participants:'55%',
        price:'50$',
        free:true,
        img:require('../../assets/images/camera2.jpeg')
    },
]

const OpenCard = (props) => {
    return(
        <>
        <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            {
            Data.map(val=>(
                <Card style={styles.cardStyle}> 
                    <ImageBackground source={val.img} imageStyle={{borderRadius:10, opacity:0.5}} style={{height:400}}>
                        <Card.Content>
                            <View style={{alignSelf:'center', marginTop:15, flexDirection:'row'}}>
                                <Image source={require('../../assets/images/winner.png')} style={{width:40, height:48, marginRight:10}}/>
                                {
                                    val.free ? 
                                    (
                                        <View style={{flexDirection:'row', marginTop:15, marginLeft:5}}>
                                            <Text style={{color:'white', marginRight:5}}>Win up to</Text>
                                            <Text style={{color:'white', fontSize:18, marginTop:-3}}>200 GP</Text>
                                        </View>
                                    ):
                                    (
                                        <View style={{flexDirection:'row', marginTop:15, marginLeft:5}}>
                                            <Text style={{color:'white', marginRight:5}}>Win</Text>
                                            <Text style={{color:'white', fontSize:18, marginTop:-3}}>240$</Text>
                                        </View>
                                    )
                                }

                            </View>
                            <Title style={styles.cardTitle}>{val.title}</Title>
                            <View style={styles.joinBtnView}>
                            <TouchableOpacity style={styles.joinBtn} onPress={()=>props.navigation.navigate('UploadImage')}>
                                <Text style={styles.joinBtnTxt}>JOIN</Text>
                            </TouchableOpacity>
                            </View>
                            <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize:15, marginTop:10}}>{val.category}</Text>
                        </Card.Content>
                        {/* <View style={styles.rotatedView}>
                            <Text style={styles.priceText}>240$</Text>
                        </View>  */}
                        <View style={styles.participantsView}>
                            <Text style={styles.participantsTxt}>{val.participants}</Text>
                            <Text style={{color:'white'}}>Participations</Text>
                        </View>
                        <View style={styles.priceView}>
                        <Text style={styles.priceTxt}>{val.free ? 'Free' : val.price}</Text>
                            <Text style={{color:'white'}}>Price</Text>
                        </View>
                        {
                            !val.free ? 
                            ( 
                                <View style={{position:'absolute', bottom:10, alignSelf:'center'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{marginRight:5, color:'white'}}>Up To</Text>
                                        <Text style={{fontSize:15, color:'white'}}>200</Text>
                                    </View>
                                    <Text style={{color:'white', textAlign:'center', fontSize:15}}>GP</Text>
                                </View>
                            ): null
                        }
                       
                    </ImageBackground>
                </Card>  
            ))
            }
        </View>
        </>
    )
}

export default OpenCard

const styles = StyleSheet.create({
    cardStyle:{
        backgroundColor:'black', 
        borderTopRightRadius:10, 
        marginRight:3, 
        marginTop:5, 
        marginLeft:3, 
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        width:width < 600 ? width:(width/2) - 6
    },
    imageStyle:{
        height:300,
        borderWidth:1,
        borderColor:'red',
        marginTop:10,
        borderTopRightRadius:50
    },
    cardTitle:{
        color:'white',
        textAlign:'center',
        marginTop:60,
    },
    rotatedView:{
        width:'15%',
        height:'9%',
        position:'absolute',
        alignSelf:'flex-end',
        backgroundColor:'#FDAA00',    
        borderTopRightRadius:10,
        opacity:0.7,
        top:0,
        right:0,
        justifyContent:'center' 
    },
    priceText:{
        color:'white',
        fontWeight:'bold',
        fontSize:12,
        textAlign:'center',
    },
    joinBtnView:{
        textAlign:'center',
        opacity:0.7,
        marginTop:15
    },
    joinBtn:{
        textAlign:'center',
        backgroundColor:'white',
        marginLeft:100,
        marginRight:100,
        borderRadius:10,
        padding:5
    },
    joinBtnTxt:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold'
    },
    participantsView:{
        position:'absolute',
        bottom:0,
        marginLeft:10,
        marginBottom:10
    },
    participantsTxt:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    priceView:{
        position:'absolute',
        bottom:0,
        right:0,
        marginRight:10,
        marginBottom:10
    },
    priceTxt:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    }

})
