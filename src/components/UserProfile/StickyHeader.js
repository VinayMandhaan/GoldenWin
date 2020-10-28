// import React, {useRef, createRef, useState} from 'react'
// import {
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   Image,
//   Animated,
//   ImageBackground,
//   StyleSheet
// } from 'react-native'
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height
// import {Avatar} from 'react-native-paper'
// import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
// import Icon from 'react-native-vector-icons/Entypo';
// import UserProfileTabs from './UserProfileTabs';
// import Gallery from './Gallery'
// import ProfileCard from './ProfileCard'
// import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

// const HEADER_HEIGHT = 300;
// const COLLAPSED_HEIGHT = 50;
// const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;

// const StickyHeader = () => {
//   const [scroll, setScroll] = useState(new Animated.Value(0))
//   const translateY = scroll.interpolate({
//     inputRange: [0, SCROLLABLE_HEIGHT],
//     outputRange: [0, -SCROLLABLE_HEIGHT],
//     extrapolate: 'clamp',
//   });

//   return(
//     <View>
//       <View style={{transform:translateY}}>
//       <ImageBackground source={require('../../assets/images/nature5.jpeg')} style={{height:300}}>
            
//             <Card transparent>
//             <CardItem style={{backgroundColor:'transparent'}}>
//               <Left>
//                 <Avatar.Image size={85} source={require('../../assets/images/user.jpeg')} />
//                 <Body>
//                     <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Golden Win</Text>
//                     <View style={{flexDirection:'row', marginTop:5}}>
//                         <Icon name="location-pin" color="#FDAA00" size={20}/>
//                         <Text style={{color:'white', marginLeft:5}}>New York, USA</Text>
//                     </View>
//                     <View style={{flexDirection:'row', marginTop:5}}>
//                         <Icon name="trophy" color="#FDAA00" size={18}/>
//                         <Text style={{color:'white', marginLeft:5}}>49,425</Text>
//                     </View>
//                     <View style={{flexDirection:'row', marginTop:5}}>
//                         <Icon name="wallet" color="#FDAA00" size={18}/>
//                         <Text style={{color:'white', marginLeft:5}}>78</Text>
//                     </View>
//                 </Body>
//               </Left>
//             </CardItem>
//             <CardItem style={{backgroundColor:'transparent'}}>
//                 <View style={{position:'absolute',right:0, flexDirection:'row', bottom:40}}>
//                     <Image source={require('../../assets/images/professional.png')} style={{width:60, height:60, marginRight:10}}/>
//                     <Image source={require('../../assets/images/judge.png')} style={{width:40, height:60, marginRight:10}}/>
//                 </View>
//             </CardItem>
//             <CardItem style={{backgroundColor:'transparent', marginTop:20}}>
//                 <View style={{position:'absolute', left:0, marginLeft:10}}>
//                     <Text style={{color:'white', textAlign:'center', fontSize:18, fontWeight:'bold'}}>17K</Text>
//                     <Text style={{color:'white', textAlign:'center'}}>Followers</Text>
//                 </View>
//                 <View style={{position:'absolute', right:0,left:0}}>
//                     <Text style={{color:'white',textAlign:'center', fontSize:18,fontWeight:'bold'}}>387</Text>
//                     <Text style={{color:'white',textAlign:'center'}}>Following</Text>
//                 </View>
//                 <View style={{position:'absolute', right:0, marginRight:10}}>
//                     <TouchableOpacity style={{backgroundColor:'#FDAA00', borderRadius:30, paddingRight:25, paddingLeft:25,paddingTop:5,paddingBottom:5}}>
//                         <Text style={{color:'white'}}>2000$</Text>
//                     </TouchableOpacity>
//                 </View>
//             </CardItem>
//             </Card>
//         </ImageBackground>
//       </View>
//     </View>
//   )
// }

// export default StickyHeader



// // import * as React from 'react';
// // import {
// //  View,
// //  StyleSheet,
// //  Dimensions,
// //  ImageBackground,
// //  Animated,
// // } from 'react-native';
// // import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// // import Gallery from './Gallery';
// // import UserProfileTabs from './UserProfileTabs';
// // import ProfileCard from './ProfileCard';
 
// // const initialLayout = {
// //  height: 0,
// //  width: Dimensions.get('window').width,
// // };
 
// // const HEADER_HEIGHT = 240;
// // const COLLAPSED_HEIGHT = 50;
// // const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
 
// // export default class StickyHeader extends React.Component {
// //  constructor(props) {
// //    super(props);
 
// //    this.state = {
// //      index: 0,
// //      routes: [
// //        { key: '1', title: 'First' },
// //        { key: '2', title: 'Second' },
// //        { key: '3', title: 'Third' },
// //      ],
// //      scroll: new Animated.Value(0),
// //    };
// //  }
 
// //  _handleIndexChange = index => {
// //    this.setState({ index });
// //  };
 
// //  _renderHeader = props => {
// //    const translateY = this.state.scroll.interpolate({
// //      inputRange: [0, SCROLLABLE_HEIGHT],
// //      outputRange: [0, -SCROLLABLE_HEIGHT],
// //      extrapolate: 'clamp',
// //    });
 
// //    return (
// //      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
// //        {/* <ImageBackground
// //          source={{ uri: 'https://picsum.photos/900' }}
// //          style={styles.cover}>
// //          <View style={styles.overlay} />
// //          <TabBar {...props} style={styles.tabbar} />
// //        </ImageBackground> */}
// //        <ProfileCard/>
// //      </Animated.View>
// //    );
// //  };
 
// //  _renderScene = () => {
// //    return (
// //      <Contacts
// //        scrollEventThrottle={1}
// //        onScroll={Animated.event(
// //          [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
// //          { useNativeDriver: true }
// //        )}
// //        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
// //      />
// //    );
// //  };
 
// //  render() {
// //    return (
// //      <TabView
// //      ref={(tab) => { this.tab = tab }}
// //      navigationState={this.state}
// //      renderScene={this._renderScene}
// //      onIndexChange={index => this.setState({ index })}
// //      initialLayout={initialLayout}
// //      renderTabBar={this._renderHeader}
// //  />
 
// //    );
// //  }
// // }
 
// // const styles = StyleSheet.create({
// //  container: {
// //    flex: 1,
// //  },
// //  overlay: {
// //    flex: 1,
// //    backgroundColor: 'rgba(0, 0, 0, .32)',
// //  },
// //  cover: {
// //    height: HEADER_HEIGHT,
// //  },
// //  header: {
// //    position: 'absolute',
// //    top: 0,
// //    left: 0,
// //    right: 0,
// //    zIndex: 1,
// //  },
// //  tabbar: {
// //    backgroundColor: 'rgba(0, 0, 0, .32)',
// //    elevation: 0,
// //    shadowOpacity: 0,
// //  },
// // });



import React, {useRef, createRef, useState} from 'react'
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground,
  StyleSheet,
  FlatList
} from 'react-native'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import {CollapsibleTabs} from 'react-native-collapsible-tabs'
import ProfileCard from './ProfileCard'
import Gallery from './Gallery'
import Achievements from './Achievements';
import Following from './Following';
import Followers from './Followers';
import Likes from './Likes';
import CustomIcon from '../../../src/CustomIcon'
import {useTheme} from '@react-navigation/native'

const StickyHeader = (props) => {
    const {colors} = useTheme()
    const [currentTab,setCurrentTab] = useState(0)
    // var { userProfile } = props.route.params;
    return(
        <>
        {/* <Text>{currentTab}</Text> */}
        <CollapsibleTabs
            collapsibleContent={(<ProfileCard navigation={props.navigation}/>)}            
            onChange={(index)=>setCurrentTab(index)}
            barColor={colors.userTabs}
            tabs={[{
                label:
                <View style={{flexDirection:'column', backgroundColor:colors.userTabs}}>
                    <Icon name='image' color="white" style={currentTab==0 ? styles.activeStyle:styles.inActiveStyle} size={20} />
                    <Text style={currentTab==0 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Win Photos</Text>
                </View>,
                component: (<Gallery navigation={props.navigation}/>)
            }, {
                label: 
                <View style={{flexDirection:'column'}}>
                    <Icon name="heart" color="grey" size={20} style={currentTab==1 ? styles.activeStyle:styles.inActiveStyle} />
                    <Text style={currentTab==1 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Likes</Text>
                </View>,
                component: (
                    <Likes navigation={props.navigation}/>
                )
            }, {
                label:  
                <View style={{flexDirection:'column'}}>
                    <CustomIcon name="achievement" color="grey" size={20} style={currentTab==2 ? styles.activeStyle:styles.inActiveStyle} />
                    <Text style={currentTab==2 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Achievement</Text>
                </View>,
                component : (
                    <Achievements navigation={props.navigation}/>
                )
            },{
                label: 
                <View style={{flexDirection:'column'}}>
                    <CustomIcon name="following" color="grey" size={20} style={currentTab==3 ? styles.activeStyle:styles.inActiveStyle} />
                    <Text style={currentTab==3 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Following</Text>
                </View>,
                component : (
                    <Following navigation={props.navigation}/>
                )
            }, {
                label: 
                <View style={{flexDirection:'column'}}>
                    <CustomIcon name="followers" color="grey" size={20} style={currentTab==4 ? styles.activeStyle:styles.inActiveStyle} />
                    <Text style={currentTab==4 ? styles.activeTxtStyle:styles.inActiveTxtStyle}>Followers</Text>
                </View>,
                component: (
                    <Followers navigation={props.navigation}/>
                )
            }]}
        />
        </>
    )
}

export default StickyHeader

const styles = StyleSheet.create({
    activeStyle:{
        color:'#FDAA00',
        alignSelf:'center'
    },
    inActiveStyle:{
        color:'grey',
        alignSelf:'center'
    },
    activeTxtStyle:{
        fontSize:8,
        color:'#FDAA00'
    },
    inActiveTxtStyle:{
        fontSize:8,
        color:'grey'

    }
})