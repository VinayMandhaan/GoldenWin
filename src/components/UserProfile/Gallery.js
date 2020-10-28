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
    FlatList,
    Modal,
    Picker
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading} from 'native-base';
import Gallery from 'react-native-image-gallery';
import { Switch } from 'react-native-paper';
import {useTheme} from '@react-navigation/native'
var Data = [
    {
        source:require('../../assets/images/nature.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature1.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature2.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/camera.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/camera1.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature2.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature1.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature2.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/camera.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/camera1.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature2.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature1.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature2.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/camera.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/camera1.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature2.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature2.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature1.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/nature2.jpeg'),
        dimensions: { width: 540, height: 720 }
    },
    {
        source:require('../../assets/images/camera.jpeg'),
        dimensions: { width: 540, height: 720 }
    },

]




const UserGallery = (props) => {
    const {colors} = useTheme()
    const [imageUrl,setImageUrl] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const [dropdownValue, setDropdownValue] = useState('Views')
    const [showStatistics, setShowStatistics] = useState(false)
    const tabletHeight = 180
    const mobileHeight = 120
    const showModalFunction = (visible, imageUrl) => {
        setImageUrl(imageUrl)
        setModalVisible(visible)
    }

    const onDropdownChange = (text) => {
        setDropdownValue(text)
        console.log(text)
        console.log(dropdownValue,'DROP')
    }

    if(modalVisible){
        return(
            <Modal
            transparent={false}
            animationType={'slide'}
            visible={modalVisible}
            onRequestClose={()=>{
                showModalFunction(setModalVisible(!modalVisible,''))
            }}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
                    {/* <Image style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', resizeMode: 'contain'}} source={imageUrl}/> */}
                    <Gallery
                        style={{ flex: 1, backgroundColor: 'black' }}
                        images={Data}
                        initialPage={imageUrl}
                    />
                    <TouchableOpacity style={{position:'absolute',top:9,right:9}} onPress={()=>showModalFunction(false,'')}>
                        <FontAwesome name="close" color="white" size={20} />
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }else{
        return(
            <View style={[showStatistics ? styles.statsContainer : styles.mainContainer, {backgroundColor:colors.tabContentColor}]}>
                <ScrollView>
                <View>
                <View style={{marginTop:5, marginBottom:5}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={showStatistics ? styles.displayStatistics : styles.btnTxt}>Statistics</Text>
                        <Switch color="#FDAA00" onValueChange={()=>setShowStatistics(!showStatistics)} value={showStatistics} style={{marginRight:50}}/>
                        {
                            showStatistics ? 
                            (
                                // <Picker
                                //     mode="dropdown"
                                //     style={{width:'20%', color:'grey'}}
                                //     placeholder="Select your SIM"
                                //     placeholderStyle={{ color: "#bfc6ea" }}
                                //     placeholderIconColor="#007aff"
                                //     selectedValue={dropdownValue}
                                //     onValueChange={(text)=>setDropdownValue(text)}
                                // >
                                //     <Picker.Item label="Number Of Views" value="Views" />
                                //     <Picker.Item label="Number Of Likes" value="Likes" />
                                //     <Picker.Item label="Number Of Downloads" value="Downloads" />
                                //     <Picker.Item label="Downloadable Status" value="Status" />
                                // </Picker>
                                <Picker
                                    style={{ width: '50%', color:colors.imgIcon}}
                                    selectedValue={dropdownValue}
                                    onValueChange={(text)=>setDropdownValue(text)}
                                    
                                >
                                    <Picker.Item label="Number Of Views" value="Views" />
                                    <Picker.Item label="Number Of Likes" value="Likes" />
                                    <Picker.Item label="Number Of Downloads" value="Downloads" />
                                    <Picker.Item label="Downloadable Status" value="Status" />
                                </Picker>
                            ):
                            null
                        }
                    </View>
                </View>
               
                <FlatList
                    data={Data}
                    renderItem={({ item, index }) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                        <TouchableOpacity  onPress={()=>props.navigation.navigate('ImageView',{
                            imgData:item.source
                        })}>
                         
                        <ImageBackground
                            style={{height:width > 600 ? tabletHeight : mobileHeight,width:'100%'}}
                            source={item.source}
                        >
                            {
                                dropdownValue === 'Views' && showStatistics ? 
                                (
                                    <View style={{position:'absolute', bottom:10, left:width > 600 ? 100: 50, backgroundColor:'grey', borderRadius:25, width:'30%'}}>
                                        <Text style={{fontWeight:'bold', padding:3, textAlign:'center'}}>200</Text>
                                    </View>
                                ) : null
                            }
                            {
                                dropdownValue === 'Status' && showStatistics ? 
                                (
                                    <View style={{position:'absolute', bottom:10, left:width > 600 ? 130: 50}}>
                                        <Icon name="download" color="white" size={20}/>
                                    </View> 
                                ) : null
                            }
                            {
                                dropdownValue === 'Likes' && showStatistics ? 
                                (
                                    <View style={{position:'absolute', bottom:10, left:width > 600 ? 100: 50, backgroundColor:'#FDAA00', borderRadius:25, width:'30%'}}>
                                        <Text style={{fontWeight:'bold', padding:3, textAlign:'center'}}>200</Text>
                                    </View>
                                ) : null
                            }
                            {
                                dropdownValue === 'Downloads' && showStatistics ? 
                                (
                                    <View style={{position:'absolute', bottom:10, left:width > 600 ? 100: 50, backgroundColor:'grey', borderRadius:25, width:'30%'}}>
                                        <Text style={{fontWeight:'bold', padding:3, textAlign:'center'}}>200</Text>
                                    </View>
                                ) : null
                            }
                            {/* <View style={{position:'absolute', top:50, left:50}}>
                                <Icon name="download" color="white" size={20}/>
                            </View> */}
                            
                        {/* <View style={{position:'absolute', bottom:0, right:0, flexDirection:'row'}}>
                             <View style={{backgroundColor:'#FDAA00', borderRadius:90/2, padding:4, marginRight:3, marginBottom:3, opacity:0.7}}>
                                 <Text style={{color:'white', fontSize:8, fontWeight:'bold'}}>20</Text>
                             </View>
                             <View style={{backgroundColor:'#FDAA00', borderRadius:90/2, padding:4, marginRight:3, marginBottom:3, opacity:0.7}}>
                                 <Text style={{color:'white', fontSize:8, fontWeight:'bold'}}>15</Text>
                             </View>
                             <View style={{backgroundColor:'#FDAA00', borderRadius:90/2, padding:4, marginRight:3, marginBottom:3, opacity:0.7}}>
                                 <Text style={{color:'white', fontSize:8, fontWeight:'bold'}}>11</Text>
                             </View>
                        </View>    */}
                        </ImageBackground>
                     
                        {/* <Card transparent>
                            <CardItem cardBody>
                                <ImageBackground source={item.source} style={{height:420, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{backgroundColor:'#2F3034'}}>
                            <Left>
                                <TouchableOpacity>
                                    <Icon name="heart-outlined" color="#d3d3d3" size={25} style={{marginRight:15}}/>
                                    <Text style={{color:'white', marginLeft:6}}>10</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="download" color="#d3d3d3" size={20} style={{marginRight:15, marginBottom:5}}/>
                                    <Text style={{color:'white', marginLeft:2}}>12</Text>
                                </TouchableOpacity>
                            </Left>
                            <Right>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Icon name="controller-play" color="white" size={15}/>
                                <Text style={{fontSize:12, marginLeft:2, color:'white'}}>300 views</Text>
                            </TouchableOpacity>
                            </Right>
                            </CardItem>
                        </Card> */}
                        </TouchableOpacity>
                        
                    </View>
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                    
                />
               
            </View>
            </ScrollView>
            </View>
        )
    }
}


export default UserGallery

const styles = StyleSheet.create({
    displayStatistics:{
        marginRight:10, 
        marginTop:14, 
        marginLeft:10, 
        fontSize:15,
        color:'#FDAA00'
    },
    btnTxt:{
        marginRight:10, 
        marginLeft:10, 
        fontSize:15,
        marginTop:2,
        color:'grey'
    },
    statsContainer:{
        flex:1, 
        marginBottom:10,
        backgroundColor:'white',
    },
    mainContainer:{
        flex:1, 
        backgroundColor:'white',
       
    }
});