import React, { useRef, useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native'

import Icon from 'react-native-vector-icons/Entypo';
import Carousel from 'react-native-banner-carousel';

const Data = [
    {
        id:1,
        img:require('../../assets/images/golden.png'),
        btnTxt:'Next'
    },
    {
        id:2,
        img:require('../../assets/images/earn.png'),
        btnTxt:'Next'
    },
    {
        id:3,
        img:require('../../assets/images/points.png'),
        btnTxt:'Next'
    },
    {
        id:4,
        img:require('../../assets/images/userinfo.png'),
        btnTxt:'Get Started'
    },

]
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
const AppInfo = (props) => {
    const _carousel = useRef(null);
    const [pageIndex, setPageIndex] = useState(0)
    const renderPage = (val, index) => {
        return (
               <View style={{height:height}}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Image source={val.img} style={{alignSelf:'center'}}/>
                        {/* <View style={{width:'40%', marginTop:50}}>
                        <TouchableOpacity style={{backgroundColor:'#FFFFFF', alignItems:'center', padding:10, borderRadius:10}}>
                            <Text style={{fontWeight:'bold'}}>{val.btnTxt}</Text>
                        </TouchableOpacity>
                    </View> */}
                    </View>
                    {/* <View style={{position:'absolute', top:35, left:20, width:'15%'}}>
                        <TouchableOpacity style={{borderColor:'#79878F', borderWidth:1, padding:5, borderRadius:15, alignItems:'center'}}>
                            <Text style={{color:'white'}}>Skip</Text>
                        </TouchableOpacity>
                    </View> */}
               </View>
        );
    }

    const changePage = (index) => {
        console.log(index)
        setPageIndex(index)
       
    }

    const nextSlide = async() => {


        _carousel.current.gotoNextPage()
        console.log('PAGE INDEX', pageIndex)
        // await setPageIndex(
        //     pageIndex + 1
        // )
        // if(pageIndex !=null){
        //     _carousel.current.gotoPage(pageIndex)
        // }
    }

    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/appinfo.png')} style={{width:'100%', height:'100%'}}>
                <Carousel
                    ref={_carousel}
                    autoplay={false}
                    index={0}
                    pageSize={BannerWidth}
                    pageIndicatorStyle={{marginBottom:120, backgroundColor:'#000000'}}
                    activePageIndicatorStyle={{backgroundColor:'white'}}
                    onPageChanged={changePage}
                >
                    {Data.map((val, index) => renderPage(val, index))}
                </Carousel>
                {
                    pageIndex === 3 ? 
                    (
                        <View style={{position:'absolute', bottom:40, alignSelf:'center', width:'40%'}}>
                            <TouchableOpacity onPress={()=>props.navigation.navigate('Main')} style={{backgroundColor:'#FFFFFF', alignItems:'center', padding:10, borderRadius:10}}>
                                <Text style={{fontWeight:'bold'}}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    ):
                    (
                        <View style={{position:'absolute', bottom:40, alignSelf:'center', width:'40%'}}>
                            <TouchableOpacity onPress={()=> {nextSlide()}}  style={{backgroundColor:'#FFFFFF', alignItems:'center', padding:10, borderRadius:10}}>
                                <Text style={{fontWeight:'bold'}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

                <View style={{position:'absolute', top:40, left:20, width:'15%'}}>
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('Main')}  style={{borderColor:'#79878F', borderWidth:1, padding:10, borderRadius:15, alignItems:'center'}}>
                        <Text style={{color:'white'}}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default AppInfo