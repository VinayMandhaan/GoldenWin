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
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Divider from 'react-native-divider';
import {Avatar} from 'react-native-paper'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import Carousel from 'react-native-banner-carousel';
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Button} from 'native-base';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "https://images.unsplash.com/photo-1601371003376-025a0b87c5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1601295863283-f4f2429cdfb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
    "https://images.unsplash.com/photo-1601371003376-025a0b87c5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
];

var Data = [
    {
        title:'Nature Winner',
        img:require('../../assets/images/nature1.jpeg')
    },
    {
        title:'Art Winner',
        img:require('../../assets/images/nature2.jpeg')
    },
    {
        title:'Attention To Detail',
        img:require('../../assets/images/nature3.jpeg')
    },
]

const InstaViewImage = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const showModalFunction = (visible, image) => {
        setModalVisible(visible)
        setImageUrl(image)
    }
    if(modalVisible){
        return(
        <Modal
        transparent={false}
        animationType={'slide'}
        visible={modalVisible}
        onRequestClose={()=>showModalFunction(!modalVisible,'')}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
                <Image source={imageUrl} style={{justifyContent: 'center',alignItems: 'center', height: '100%', width: '100%',resizeMode: 'contain'}}/>
            </View>
            <TouchableOpacity style={{position:'absolute', top:15,right:9}} onPress={()=>showModalFunction(!modalVisible,'')}>
                <Icon name="cross" color="white" size={20}/>
            </TouchableOpacity>
        </Modal>
    )
    }else{
    return(
        <View style={{flex:1,backgroundColor:'#2F3034'}}>
        <View style={{backgroundColor:'#2F3034'}}>


            <ScrollView>
            {
                Data.map(val=>(
                <Card transparent>
                    <CardItem style={{backgroundColor:'#2F3034'}}>
                    <Left>
                    <Avatar.Image style={{marginRight:10}} size={45} source={require('../../assets/images/user.jpeg')} />
                        <Body>
                        <Text style={{color:'white'}}>Golden Win</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Text style={{color:'white'}}>1h</Text>
                    </Right>
                    </CardItem>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('ImageView',{
                        imgData:val.img
                    })}>
                    <CardItem cardBody>
                        <Image source={val.img} style={{height: height-450, width: null, flex: 1}}/>
                    </CardItem>
                    </TouchableOpacity>
                    <CardItem style={{backgroundColor:'#2F3034'}}>
                    <Left>
                        <TouchableOpacity>
                            <Icon name="heart-outlined" color="#d3d3d3" size={30} style={{marginRight:15}}/>
                            <Text style={{color:'white', marginLeft:6}}>10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="download" color="#d3d3d3" size={25} style={{marginRight:15, marginBottom:5}}/>
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
                    {/* <CardItem style={{borderRadius:0}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold', marginRight:10}}>Golden Win</Text>
                            <Text>This is the description of this image</Text>
                        </View>
                    </CardItem> */}

                </Card>
                ))
        }
            </ScrollView>
        </View>
        </View>
    )
}
}

export default InstaViewImage

const styles = StyleSheet.create({
    cardStyle:{
        backgroundColor:'white',
        margin:5,
        marginBottom:15
    },
    titleTxt:{
        textAlign:'center',
        marginTop:8,
        fontWeight:'bold'
    },
    avatarView:{
        marginTop:10,
        marginLeft:10
    },
    iconView:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        right:0,
        marginRight:10,
        marginBottom:10
    },
    iconStyles:{
        backgroundColor:'#FDAA00',
        marginRight:5,
        borderRadius:60/2, 
        padding:10

    }  
})