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
    Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Divider from 'react-native-divider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import { Input } from 'react-native-elements';
import {Avatar, TextInput} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item} from 'native-base';
import {useTheme} from '@react-navigation/native'

const ProfileHeader = (props) => {
    const {colors} = useTheme()
    const [modalVisible,setModalVisible] = useState(false)
    
    const showModalFunction = (visible) => {
        setModalVisible(visible)
    }
    if(modalVisible){
        return(
            <Modal
                transparent={false}
                animationType={'fade'}
                visible={modalVisible}
                onRequestClose={()=>showModalFunction(false)}
            >
                <View style={{flex:1, backgroundColor:colors.containerColor}}>
                    <View style={{alignItems:'center', position:'absolute', top:250, right:0, left:0}}>
                        <Avatar.Image style={{marginRight:10}} size={75} source={require('../../assets/images/user.jpeg')} />
                        <View style={{marginTop:30}}>
                        <Input
                                placeholder='Edit Your Name'
                                inputContainerStyle={{ width: width - 30, borderWidth: 1, borderColor: "#fff", borderRadius: 20, borderBottomWidth: 0, borderLeftWidth: 0 }}
                                inputStyle={{ textAlign: "center", color: "#fff", fontFamily: "SegoeUI", fontSize: 16, marginRight:-20 }}
                                rightIconContainerStyle={{ marginRight: 20 }}
                                rightIcon={
                                    <Icon
                                        name='user'
                                        size={24}
                                        color='#fff'
                                    />
                                }
                               
                            />
                            <Input
                                placeholder='Edit Your Address'
                                leftIconContainerStyle={{ marginLeft: 20 }}
                                inputContainerStyle={{ width: width - 30, borderWidth: 1, borderColor: "#fff", borderRadius: 20, borderRightWidth: 0, marginTop: -28}}
                                inputStyle={{ textAlign: "center", color: "#fff", fontFamily: "SegoeUI", fontSize: 16, marginLeft:-50 }}
                                secureTextEntry={true}
                                leftIcon={
                                    <Icon
                                        name='location-pin'
                                        size={24}
                                        color='#fff'
                                    />
                                }
                                
                            />
                            <TouchableOpacity>
                                <View style={styles.submitBtn}>
                                    <Text style={styles.submitBtnTxt}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    <View style={{position:'absolute', top:10,right:5}}>
                    <TouchableOpacity onPress={()=>showModalFunction(false)}>
                        <Icon name="cross" color="white" size={20}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }else{
        return(
            <View style={{marginTop:20, marginBottom:20}}>
                <View style={{position:'absolute',top:0, marginLeft:10}}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                        <Icon name="chevron-left" color="white" size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={{position:'absolute',top:0, right:0, marginRight:45}}>
                    <TouchableOpacity>
                        <Icon name="share" color="white" size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={{position:'absolute',top:0, right:0, marginRight:10}}>
                    <TouchableOpacity onPress={()=>showModalFunction(true)}>
                        <Icon name="dots-three-vertical" color="white" size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
}

export default ProfileHeader

const styles = StyleSheet.create({

    submitBtn:{ marginTop: -28, width: width - 30, borderWidth: 1, borderTopWidth: 0, borderColor: "#fff", borderRadius: 20, borderLeftWidth: 0, alignSelf: "center" },
    submitBtnTxt:{ color: "#fff", padding: 14, fontSize: 16, alignSelf: "center", fontFamily: "SegoeUI" },

})
