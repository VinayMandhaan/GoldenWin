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
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
import firebase from '../../../config'
import {connect} from 'react-redux'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {forgot_password} from '../../../actions/auth'



const ForgotPassword = (props) => {
    const [keepSignIn, setKeepSignIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    handlePassword = () => {
        props.forgot_password(email)
    }

    return (
        <ImageBackground source={require('../../../assets/images/authbg.jpg')} style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.main}>

                    <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />

                    <View style={styles.formBox}>
                        <Text style={styles.heading}>Forgot Password</Text>
                        <View>
                        <Input
                                placeholder='Email'
                                leftIconContainerStyle={{ marginLeft: 20 }}
                                inputContainerStyle={{ width: width - 30, borderWidth: 1, borderColor: "#fff", borderRadius: 20, borderRightWidth: 0}}
                                inputStyle={{ textAlign: "center", color: "#fff", fontFamily: "SegoeUI", fontSize: 16, marginLeft:-50 }}
                                leftIcon={
                                    <Zocial
                                        name='email'
                                        size={24}
                                        color='#fff'
                                    />
                                }
                            onChangeText={text => setEmail(text)}
                            />
                            <TouchableOpacity onPress={handlePassword}>
                                <View style={styles.submitBtn}>
                                    <Text style={styles.submitBtnTxt}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                           
                            
                            <View style={styles.row2}>
                                <TouchableOpacity onPress={()=>{props.navigation.navigate("Login")}}> 
                                    <Text style={styles.already}>Signin</Text>
                                </TouchableOpacity>
                            </View>
                           
                        </View>
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: height - 10,
        padding: 10,
        paddingBottom: 0
    },
    logo: {
        alignSelf: "center",
        marginTop:30
    },
    formBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heading:{
        color: "#fff", fontSize: 16, paddingBottom: 14, fontFamily: "SegoeUI-Bold" 
    },
    submitBtn:{ marginTop: -28, width: width - 30, borderWidth: 1, borderTopWidth: 0, borderColor: "#fff", borderRadius: 20, borderLeftWidth: 0, alignSelf: "center" },
    submitBtnTxt:{ color: "#fff", padding: 14, fontSize: 16, alignSelf: "center", fontFamily: "SegoeUI" },
    row1:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width - 30,
        alignSelf: "center",
        paddingRight: 14,
        marginVertical:6
    },
    socials:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:width-60,
        alignSelf:"center",
        marginVertical:6
    },
    forgotPass:{ fontFamily: "SegoeUI", color: "#fff", fontSize: 14 },
    divider:{width:width-60, alignSelf:"center", marginTop:-15},
    row2:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    already:{ fontFamily: "SegoeUI", color: "#fff", fontSize: 14, paddingVertical:14, marginVertical:10 },
    guest:{ fontFamily: "SegoeUI", color: "#fff", fontSize: 14, marginBottom:18}
})

export default connect(null,{forgot_password})(ForgotPassword);