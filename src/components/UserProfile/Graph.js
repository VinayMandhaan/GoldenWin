import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Input, CheckBox, Button } from 'react-native-elements';
import Divider from 'react-native-divider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
import {Avatar} from 'react-native-paper'
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right, Tabs, Tab, Grid, Col, TabHeading } from 'native-base';
import { LineChart } from "react-native-chart-kit";

var Data = [
    {
        name:'Nature',
    }
]

const Graph = () => {
    const tabletHeight = 420
    const mobileHeight = 220
    return(
        <View>
            {
                Data.map(val=>(
                <>
                    {/* <Text style={{textAlign:'center'}}>{val.name} GD Points (93)</Text> */}
                    <LineChart
                        data={{
                        labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                
                        width={Dimensions.get("window").width} // from react-native
                        height={width > 600 ? tabletHeight : mobileHeight}
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "white",
                        // backgroundGradientFrom: "",
                        // backgroundGradientTo: "",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        marginRight:5,
                        marginLeft:5,
                        alignSelf:'center'
                        }}
                    />
                </>
                        ))
            }
        </View>
    )
}

export default Graph