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
    Modal,
    ProgressBarAndroid,
    Animated,
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Divider from 'react-native-divider';
import {Avatar} from 'react-native-paper'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
import Carousel from 'react-native-banner-carousel';
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Button} from 'native-base';
import InstaViewImage from './InstaViewImage'
import * as Progress from 'react-native-progress';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "https://images.unsplash.com/photo-1601371003376-025a0b87c5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1601295863283-f4f2429cdfb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
    "https://images.unsplash.com/photo-1601277729892-bb20c7cadf6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
];

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}



const TopPicks = (props) => {
    
    const _carousel = useRef(null);
    const [displayStory , setDisplayStory] = useState(false)
    // const [progressBar, setProgressBar] = useState(0)
    const [stories, setStories] = useState(3)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [storyView, setStoryView] = useState(true)

    var progressWidth = Math.floor(screenWidth / stories) - stories 
    

    
    const showStoryFunction = (visible) => {
        setDisplayStory(visible)
    }

    const nextSlide = () => {
        setCurrentIndex(
            currentIndex => currentIndex === 3 ? 0 : currentIndex + 1
        )
        if(currentIndex !=null){
            _carousel.current.gotoPage(currentIndex)
        }
      
      
       
    }

    const renderPage = (image, index) => {
        return (
            <View key={index}>
                <TouchableOpacity onPress={()=> {nextSlide()}}>
                    <Image style={{ height: 450, width: '100%', alignSelf:'center', marginTop:120}} source={{ uri: image }} />
                </TouchableOpacity>
            </View>
        );
    }



    // Progress Barrr
    let animation = useRef(new Animated.Value(0));
    const [progress, setProgress] = useState(0);
    const [noOfStories, setnoOfStories] = useState(0)
    const [noOfImages, setNoOfImages] = useState(3)

    useInterval(() => {
        // update progress until 100
        if(progress < 100 && displayStory) {
            setProgress(progress + 1);
        }
    }, 90);
 
    
    
    useEffect(() => {
        console.log(progressWidth)
        Animated.timing(animation.current, {
        toValue: progress,
        duration: 5
        }).start();
        if(progress === 100){
            setnoOfStories(noOfStories => noOfStories + 1)
            setCurrentIndex(
                currentIndex => currentIndex === 2 ? 0 : currentIndex + 1
            )
                _carousel.current.gotoPage(currentIndex)
            // if(noOfStories < 10){
            //     setCurrentIndex(
            //         currentIndex => currentIndex === 3 ? 0 : currentIndex + 1
            //     )
            //     _carousel.current.gotoPage(currentIndex)
            // }
        }
    },[progress])

    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    })

    
    // const updateProgress = () => {
    //     var duration = 5000
        
    //    var newInterval = setInterval(() => {
           
    //         // If progress bar is complete, then clear interval
    //         if (progressBar === 100) {
    //           clearInterval(newInterval);
    //         } else {
    //           // Otherwise, keep updating progress bar by 1
    //           setProgressBar(progressBar => progressBar + 1)
    //         }
    //       }, duration);
        
    // }

    const [name,setName] = useState(0)
    const onPageChanged =  index => {
        setProgress(0)
        setName(index)

    }

    if(displayStory){
        return(
            <Modal
            transparent={false}
            animationType={'fade'}
            visible={displayStory}
            onRequestClose={()=>showStoryFunction(false)}
            >
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
                    <Carousel
                        ref={_carousel}
                        autoplay={false}
                        autoplayTimeout={5000}
                        loop={false}
                        onPageChanged={onPageChanged}
                        index={0}
                        pageSize={BannerWidth}
                        showsPageIndicator={false}
                        
                    >
                        {images.map((image, index) => renderPage(image, index))}
                    </Carousel>
                    <TouchableOpacity style={{position:'absolute', top:40,right:15}} onPress={()=>showStoryFunction(false)}>
                        <Icon name="cross" color="white" size={20}/>
                    </TouchableOpacity>
                    {/* <View style={{position:'absolute', top:0}}>
                        <Progress.Bar indeterminate={false} progress={progressBar} width={200} />
                    </View> */}
                    <View style={styles.container}>
                    {
                        images.map((val,index)=>(
                          
                    <View style={styles.progressBar}>
                        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "white", width: !(index >= name) ? '100%' : index === name ? width : 0}]}/>    
                    </View>
                     ))
                     }
                    {/* <View>
                        <Text style={{color:'white'}}>{name}</Text>
                    </View> */}
                 </View>
               </View>
            </Modal>
        )
    }else{
    return(
        <>
            <View style={{margin:10, flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{showStoryFunction(true), setStoryView(false)}}>
                    <View style={storyView ? styles.storyBorder : styles.storyDisplay}>
                        <Avatar.Image size={55} source={require('../../assets/images/user.jpeg')} />
                    </View>
                </TouchableOpacity>
                {/* <Text style={{color:'white'}}>{progressWidth}</Text> */}
                {/* <TouchableOpacity onPress={()=>{showStoryFunction(true), setStoryView(false)}}>
                    <View style={storyView ? styles.storyBorder : styles.storyDisplay}>
                        <Avatar.Image size={55} source={require('../../assets/images/user.jpeg')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{showStoryFunction(true), setStoryView(false)}}>
                    <View style={storyView ? styles.storyBorder : styles.storyDisplay}>
                        <Avatar.Image size={55} source={require('../../assets/images/user.jpeg')} />
                    </View>
                </TouchableOpacity> */}
            </View>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth:2, marginTop:10, marginBottom:10}}></View>
            <InstaViewImage navigation={props.navigation}/>
        </>
    )
    }
}

export default TopPicks

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
        padding:10,
        marginTop:-20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        width:'100%',
        padding: 8,
        position:'absolute',
        top:0,
        flexDirection:'row'
    },
    progressBar: {
        height: 10,
        width: 127,
        backgroundColor: 'grey',
        borderWidth: 2,
        flexDirection:'row'
    },
    storyBorder:{
        borderRadius:180/2, 
        borderWidth:3, 
        marginRight:10, 
        padding:2, 
        borderColor:'#FDAA00'
    },
    storyDisplay:{
        marginRight:10
    }
})