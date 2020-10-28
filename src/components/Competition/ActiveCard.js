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
    Button,
    Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Divider from 'react-native-divider';
import ProgressGraph from './ProgressGraph'
import VoterGraph from './VoterGraph'
import {useTheme} from '@react-navigation/native'

var Data = [
    {
        title:'Nature',
        category:'Environment',
        subTitle:'In Progress',
        price:'240$',
        participationPrice:'5$',
        inProgress:true
    },
    {
        title:'Nature',
        category:'Animals',
        subTitle:'Open for participation',
        price:'240$',
        participationPrice:'5$',
        inProgress:false
    },
    {
        title:'Nature',
        category:'Travel',
        subTitle:'In Progress',
        price:'240$',
        participationPrice:'5$',
        inProgress:true
    },
]

const ActiveCard = (props) => {
    const {colors} = useTheme()
    const [modalVisible, setModalVisible] = useState(false)
    
    const showModal = (visible) => {
        setModalVisible(visible)
    }
    return(
        <View style={{flex:1, backgroundColor:colors.containerColor, marginBottom:20}}>
        <ScrollView>
        {
            modalVisible ? 
            (
                <Modal
                    transparent={true}
                    animationType={'fade'}
                    visible={modalVisible}
                    onRequestClose={()=>showModal(false)}
                >
                    <View style={{backgroundColor:'rgba(255,255,255,0.7)', flex:1}}>
                        <ImageBackground source={require('../../assets/images/nature.jpeg')} imageStyle={{opacity:0.5}} style={{width:'100%', flex:1}}>
                        <TouchableOpacity onPress={()=>showModal(false)}>
                            <Text>Click Me</Text>
                        </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </Modal>
            ): null
        }
        <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {
            Data.map(val=>(
                <Card style={styles.cardStyle} onPress={!val.inProgress ? ()=>props.navigation.navigate('Enrolled'): ()=>props.navigation.navigate('ProgressComp')}>
                    <ImageBackground source={require('../../assets/images/camera1.jpeg')} imageStyle={{borderTopRightRadius:10, opacity:0.5, borderTopLeftRadius:10, borderRadius:10}} style={{height:400}}>
                    <Card.Content>
                        <Title style={styles.cardTitle}>{val.title}</Title>
                        <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize:15}}>{val.category}</Text>
                        {/* <View style={{width:400, alignSelf:"center",}}> */}
                            <Divider orientation={"center"} color={'#fff'}>{val.subTitle}</Divider>
                        {/* </View> */}
                    </Card.Content>
                    <View style={[styles.rotatedView, {backgroundColor:colors.primaryColor}]}>
                        <Text style={[styles.priceText, {color:colors.btnTxt}]}>{val.price}</Text>
                    </View>    
                    <Card.Actions>
                        <View style={styles.graphView}>
                        <TouchableOpacity onPress={!val.inProgress ? ()=>props.navigation.navigate('Enrolled'): ()=>props.navigation.navigate('ProgressComp')}>
                            {
                                !val.inProgress ? 
                                <ProgressGraph size={120} graphWidth={12}/>
                                : <VoterGraph size={100}/>
                            }
                        </TouchableOpacity>                        
                        </View>
                        <View>
                            <Image source={require('../../assets/images/boximage.png')} style={styles.boxImg}/>
                        </View>
                    </Card.Actions>
                    <View style={{flexDirection:'row', position:'absolute', right:0, bottom:60}}>
                        <Text style={{color:'white', marginRight:5, marginTop:2, fontSize:12}}>Partcipation Price:</Text>
                        <Text style={{color:'#FDAA00', marginRight:5}}>5$</Text>
                    </View>
                    {
                        !val.inProgress ? 
                        <View style={{width:'100%', height:50,justifyContent:'center',alignItems:'center', position:'absolute', bottom:0, backgroundColor:colors.btnColor, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                            <TouchableOpacity>
                                <View style={{flexDirection:'row'}}>
                                    <Icon name="log-out" color={colors.btnTxt} size={20}/>
                                    <Text style={{color:colors.btnTxt, fontSize:15, marginLeft:5}}>EXIT COMPETITION</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        : null
                    }
                    
                    </ImageBackground>
                </Card>   
            ))
        }
        </View>
        </ScrollView>
        </View>
    )
}

export default ActiveCard

const styles = StyleSheet.create({
    cardStyle:{
        backgroundColor:'black', 
        borderTopRightRadius:10, 
        marginRight:3, 
        marginTop:5, 
        marginLeft:3, 
        borderTopLeftRadius:10,
        borderRadius:10,
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
        right:10,
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
    }
})