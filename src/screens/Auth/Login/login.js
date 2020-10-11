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
    StatusBar
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
import firebase from '../../../config'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login, loading} from '../../../actions/auth'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import SplashScreen from '../../SplashScreen'


const Login = (props) => {
    const [keepSignIn, setKeepSignIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    handleLogin = () => {
        props.login(email,password)
        props.loading(true)
    }
    return (
        <ImageBackground source={require('../../../assets/images/authbg.jpg')} style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.main}>

                    <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />

                    <View style={styles.formBox}>
                        <Text style={styles.heading}>LOGIN</Text>
                        <View>
                            <Input
                                placeholder='name@example.com'
                                inputContainerStyle={{ width: width - 30, borderWidth: 1, borderColor: "#fff", borderRadius: 20, borderBottomWidth: 0, borderLeftWidth: 0 }}
                                inputStyle={{ textAlign: "center", color: "#fff", fontFamily: "SegoeUI", fontSize: 16, marginRight:-20 }}
                                rightIconContainerStyle={{ marginRight: 20 }}
                                rightIcon={
                                    <Zocial
                                        name='email'
                                        size={24}
                                        color='#fff'
                                    />
                                }
                                onChangeText={text => setEmail(text)}
                            />
                            <Input
                                placeholder='password'
                                leftIconContainerStyle={{ marginLeft: 20 }}
                                inputContainerStyle={{ width: width - 30, borderWidth: 1, borderColor: "#fff", borderRadius: 20, borderRightWidth: 0, marginTop: -28}}
                                inputStyle={{ textAlign: "center", color: "#fff", fontFamily: "SegoeUI", fontSize: 16, marginLeft:-50 }}
                                secureTextEntry={true}
                                leftIcon={
                                    <MaterialIcons
                                        name='lock'
                                        size={24}
                                        color='#fff'
                                    />
                                }
                                onChangeText={text => setPassword(text)}
                            />
                            <TouchableOpacity onPress={handleLogin}>
                                <View style={styles.submitBtn}>
                                    <Text style={styles.submitBtnTxt}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.row1}>
                                {/* <CheckBox
                                    center
                                    title='Keep me sign in'
                                    checked={keepSignIn}
                                    onPress={() => { setKeepSignIn(!keepSignIn) }}
                                    containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
                                    textStyle={{ color: "#fff", fontSize: 14, fontFamily: "SegoeUI" }}
                                    fontFamily={"SegoeUI"}
                                /> */}

                            </View>
                            <View style={{marginBottom:15}}>
                            <TouchableOpacity onPress={()=>props.navigation.navigate('ForgotPassword')}>
                                <Text style={styles.forgotPass}>Forgot password</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.divider}>
                            <Divider orientation={"center"} color={'#fff'}>or</Divider>
                            </View>
                            <Text style={styles.already, {alignSelf:"center", color:'white'}}>Signin With</Text>
                            <View style={styles.socials}>
                                <Button 
                                buttonStyle={{backgroundColor:"#3B569F", width:70, borderRadius:30}}
                                icon={
                                    <Icon
                                      name="facebook"
                                      size={20}
                                      color="white"
                                    />
                                  }
                                />
                                 <Button 
                                buttonStyle={{backgroundColor:"#397DC0", width:70, borderRadius:30}}

                                icon={
                                    <Icon
                                      name="twitter"
                                      size={20}
                                      color="white"
                                    />
                                  }
                                />
                                 <Button 
                                buttonStyle={{backgroundColor:"#B41010", width:70, borderRadius:30}}

                                icon={
                                    <Icon
                                      name="google"
                                      size={20}
                                      color="white"
                                    />
                                  }
                                />
                                    
                            </View>
                            <View style={styles.row2}>
                                <TouchableOpacity onPress={()=>{props.navigation.navigate("Signup")}}>  
                                    <Text style={styles.already}>Don't have an account? Signup</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>props.navigation.navigate('Users')}>
                                    <Text style={styles.guest}>Continue as guest</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}

Login.propTypes={
    loggedIn: PropTypes.func
}
const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: height - 20,
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
    forgotPass:{ fontFamily: "SegoeUI", color: "#fff", fontSize: 14, textAlign:'center'},
    divider:{width:width-60, alignSelf:"center", marginTop:-15},
    row2:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    already:{ fontFamily: "SegoeUI", color: "#fff", fontSize: 14, paddingVertical:14 },
    guest:{ fontFamily: "SegoeUI", color: "#fff", fontSize: 14, marginBottom:18}
})

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    isLoading: state.auth.loading
})

export default connect(mapStateToProps,{login,loading})(Login);