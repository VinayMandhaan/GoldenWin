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
        img:require('../../assets/images/camera.jpeg')
    },
    {
        title:'Nature',
        category:'Animals',
        img:require('../../assets/images/camera3.jpeg')
    },
    {
        title:'Nature',
        category:'Travel',
        img:require('../../assets/images/nature.jpeg')
    }
]

const ProgressCard = (props) => {
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
                            <Text style={{color:'white', fontSize:18, marginTop:8}}>200 GP</Text>
                        </View>
                        <Title style={styles.cardTitle}>{val.title}</Title>
                        <View style={styles.joinBtnView}>
                        <TouchableOpacity style={styles.joinBtn} onPress={()=>props.navigation.navigate('Voting')}>
                            <Text style={styles.joinBtnTxt}>VOTE</Text>
                        </TouchableOpacity>
                        </View>
                        <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize:15, marginTop:10}}>{val.category}</Text>
                    </Card.Content>
                    {/* <View style={styles.rotatedView}> */}
                        {/* <Text style={styles.priceText}>240$</Text> */}
                        {/* <Text style={{color:'white', fontWeight:'bold', fontSize:12 ,alignSelf:'flex-end', marginRight:12}}>Prize</Text> */}
                    {/* </View>  */}
                    <View style={styles.participantsView}>
                        <Text style={styles.participantsTxt}>82%</Text>
                        <Text style={{color:'white',textAlign:'center'}}>Voters</Text>
                    </View>
                </ImageBackground>
            </Card>  
              ))
          }
          </View>
        </>
    )
}

export default ProgressCard

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
        left:0,
        right:0,
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