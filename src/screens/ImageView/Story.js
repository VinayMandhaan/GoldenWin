// import React, { useEffect, useState } from 'react'
// import {
//     View,
//     Text,
//     ScrollView,
//     ImageBackground,
//     Image,
//     TouchableOpacity,
//     Dimensions,
//     StyleSheet,
//     Modal
// } from 'react-native'
// import Icon from 'react-native-vector-icons/Entypo';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import Divider from 'react-native-divider';
// import {Avatar} from 'react-native-paper'
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height
// import Carousel from 'react-native-banner-carousel';
// import { Container, Content, Card, CardItem, Thumbnail, Left, Body, Right, Button} from 'native-base';
// import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';
// const BannerWidth = Dimensions.get('window').width;
// const BannerHeight = 260;

// const images = [
//     "https://images.unsplash.com/photo-1601371003376-025a0b87c5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//     "https://images.unsplash.com/photo-1601295863283-f4f2429cdfb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
//     "https://images.unsplash.com/photo-1601371003376-025a0b87c5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
// ];





// const Story = (props) => {
//     const [modalVisible, setModalVisible] = useState(false)
//     const [imageUrl, setImageUrl] = useState('')


//     const showModalFunction = (visible, image) => {
//         setModalVisible(visible)
//         setImageUrl(image)
//     }

//     const renderPage = (image, index) => {
//     return (
//         <View key={index}>
//             <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
//         </View>
//     );
//     }
//     if(modalVisible){
//         return(
//         <Modal
//         transparent={false}
//         animationType={'fade'}
//         visible={modalVisible}
//         onRequestClose={()=>showModalFunction(!modalVisible,'')}
//         >
//            <View>
//                 <Carousel
//                     autoplay
//                     autoplayTimeout={5000}
//                     loop
//                     index={0}
//                     pageSize={BannerWidth}
//                 >
//                     {images.map((image, index) => renderPage(image, index))}
//                 </Carousel>
//            </View>
//         </Modal>
// )
//     }else{
//     return(
//         <>
            
//         </>
//     )
//     }
// }

// export default Story