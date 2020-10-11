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
import FinishedBar from './FinishedBar';
import ProgressGraph from './ProgressGraph'
import VoterGraph from './VoterGraph'
import {Switch} from 'native-base'
var Data = [
    {
        title:'Nature',
        subTitle:'Finished',
        category:'Environment',
        winner:'Golden Win',
        price:'50$',
        points:240,
        img:require('../../assets/images/camera1.jpeg'),
        winner:true
    },
    {
        title:'Nature',
        subTitle:'Finished',
        category:'Animal',
        winner:'Golden Win',
        price:'50$',
        points:240,
        img:require('../../assets/images/photography.jpeg'),
        winner:false
    },
    {
        title:'Nature',
        subTitle:'Finished',
        category:'Travel',
        winner:'Golden Win',
        price:'50$',
        points:240,
        img:require('../../assets/images/camera2.jpeg'),
        winner:true
    },
]


const Finished = (props) => {
    const [downloadable, setDownloadable] = useState(false)
    return(
        <View style={{flex:1, marginBottom:20}}>
        {
            Data.map(val=>(
                <Card style={styles.cardStyle}>
                    <ImageBackground source={val.img} imageStyle={{borderTopRightRadius:10, opacity:0.5, borderTopLeftRadius:10, borderRadius:10}} style={{height:400}}>
                    <Card.Content>
                        <Title style={styles.cardTitle}>{val.title}</Title>
                        <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize:15}}>{val.category}</Text>
                        <View style={{width:width-40, alignSelf:"center",}}>
                            <Divider orientation={"center"} color={'#fff'}>{val.subTitle}</Divider>
                        </View>
                    </Card.Content>
                    {/* <View style={styles.rotatedView}>
                        <Text style={styles.priceText}>{val.price}</Text>
                    </View>     */}
                    <Card.Actions>
                        <View style={val.winner ? styles.winnerStyle : styles.lostStyle}>
                        <TouchableOpacity>
                            <FinishedBar/>
                        </TouchableOpacity>                        
                        </View>
                        <View>
                           {
                               val.winner ?
                                <ImageBackground source={require('../../assets/images/boximage.png')} imageStyle={{opacity:0.5}} style={styles.boxImg}>
                                    <View style={{top:25}}>
                                        <Text style={{color:'white', textAlign:'center'}}>Removed In 15:25</Text>
                                    </View>
                                </ImageBackground>
                                : null
                           }
                        </View>
                    </Card.Actions>
                    <View style={val.winner ? styles.winnerPoints : styles.lostPoints}>
                        <Text style={{color:'white', marginRight:5, marginTop:2, fontSize:12}}>GW Points:</Text>
                        <Text style={{color:'#FDAA00', marginRight:5}}>{val.points}</Text>
                    </View>
                    <View style={val.winner ? styles.winnerParticipation : styles.lostParticipation}>
                        <Text style={{color:'white', marginRight:5, marginTop:2, fontSize:12}}>Partcipation Price:</Text>
                        <Text style={{color:'#FDAA00', marginRight:5}}>5$</Text>
                    </View>
                    {
                        !val.winner ? 
                        <View style={{width:'100%',justifyContent:'center',alignItems:'center', position:'absolute', bottom:0, backgroundColor:'#FE9700', borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                            <TouchableOpacity style={{flexDirection:'row', padding:15}} onPress={()=>props.navigation.navigate('ImageView',{
                                imgData:val.img
                            })}>
                                    <Icon name="trophy" color="white" size={20}/>
                                    <Text style={{color:'white', fontSize:15, marginLeft:5}}>VIEW WINNER</Text>
                               
                            </TouchableOpacity>
                        </View>
                        : null
                    }
                    {
                        val.winner ? 
                        <View style={{position:'absolute', top:10, left:10}}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('../../assets/images/winner.png')} style={{width:40, height:48}}/>
                                <Text style={{color:'white', fontWeight:'bold', marginTop:12, marginLeft:10}}>240$</Text>
                            </View>
                        </View>
                        : null
                    }
                    {
                        val.winner ? 
                        (
                            <View style={{marginLeft:5, marginTop:10}}>
                            <TouchableOpacity style={{backgroundColor:'#FDAA00', width:'35%', padding:2, borderRadius:10}}>
                                <Text style={{color:'white', textAlign:'center'}}>Publish The Status</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#FDAA00', width:'35%', padding:2, borderRadius:10, marginTop:10}}>
                                <Text  style={{color:'white', textAlign:'center'}}>Publish In Public</Text>
                            </TouchableOpacity>
                                <View style={{flexDirection:'row', marginTop:10, marginLeft:5}}>
                                    <Text style={{color:'white', fontWeight:'bold', marginRight:5}}>Downloadable</Text>
                                    <Switch onValueChange={()=>setDownloadable(!downloadable)} value={downloadable}/>
                                </View>
                            </View>
                        ) : null

                    }
                    </ImageBackground>
                </Card>   
            ))
        }
        </View>
    )
}

export default Finished


const styles = StyleSheet.create({
    cardStyle:{
        backgroundColor:'black', 
        borderTopRightRadius:10, 
        marginRight:3, 
        marginTop:5, 
        marginLeft:3, 
        borderTopLeftRadius:10,
        borderRadius:10
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
        marginTop:30,
        fontSize:25,
        marginBottom:5
    },
    cardSubTitle:{
        color:'white',
        textAlign:'center',
        marginTop:18,
        marginBottom:20
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
    graphView:{
        position:'absolute', 
        right:0,
        marginRight:10
    },
    graphImg:{
        marginLeft:20,
        marginBottom:15
    },
    graphText:{
        color:'white', 
        fontSize:12, 
        marginRight:10
    },
    graphtTextPrice:{
        color:'#FE9700', 
        fontSize:15, 
        fontWeight:'bold'
    },
    boxImg:{
        height:100,
        width:100
    },
    bottomBtnView:{
        textAlign:'center',
        marginTop:33
    },
    bottomBtn:{
        textAlign:'center', 
        backgroundColor:'#FE9700', 
        borderTopLeftRadius:10, 
        borderTopRightRadius:10, 
        paddingBottom:10, 
        paddingTop:10
    },
    winnerStyle:{
        position:'absolute', 
        right:0,
        marginRight:10
    },
    lostStyle:{
        width:'100%',
        alignItems:'center'
    },
    winnerPoints:{
        flexDirection:'row', 
        position:'absolute', 
        right:0, 
        bottom:80
    },
    winnerParticipation:{
        flexDirection:'row', 
        position:'absolute', 
        right:0, 
        bottom:60
    },
    lostPoints:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:5,
        alignSelf:'center',
    },
    lostParticipation:{
        flexDirection:'row',
        alignSelf:'center',
    }
})