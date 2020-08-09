import React from 'react';
import {Text,View,StyleSheet,StatusBar} from 'react-native';

import {widthToDp,heightToDp} from '../Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
const Box4=(props)=>{
    
    return(<>
        <View style={{height:heightToDp('25'),width:widthToDp('32'),borderRadius:widthToDp('0.5'),marginTop:heightToDp('0'),marginLeft:widthToDp('2')}}>
                <FastImage source={props.link} style={{height:heightToDp('12'),width:widthToDp('32'),borderRadius:widthToDp('0.8'),alignSelf:"center"}}/>
                <Text style={{color:"black",fontSize:widthToDp('3'),marginLeft:widthToDp('1'),fontWeight:"bold",paddingTop:widthToDp('2')}}>{props.title}</Text>
                <View style={{flexDirection:"row",marginLeft:widthToDp('1'),alignItems:"center"}}>
                        <Ionicons name="ios-star-sharp" size={widthToDp('2')}  color="red"/>
                        <Ionicons name="ios-star-sharp" size={widthToDp('2')}  color="red"/>
                        <Ionicons name="ios-star-sharp" size={widthToDp('2')} color="red"/>
                        <Ionicons name="ios-star-sharp" size={widthToDp('2')} color="#767575"/>
                        <Ionicons name="ios-star-half-sharp" size={widthToDp('2')} color="#767575"/>
                        <Text style={{fontSize:widthToDp('2'),marginLeft:widthToDp('4'),alignSelf:"center",fontWeight:"bold"}}>{props.rate}</Text>
                        <Text style={{color:"#767575",fontSize:widthToDp('2'),marginLeft:widthToDp('1')}}>{props.dev}</Text>   
                </View>
                <Text style={{color:"#767575",fontSize:widthToDp('2.2'),marginLeft:widthToDp('1')}}>{props.item}</Text>
                <Text style={{color:"#767575",fontSize:widthToDp('2.2'),marginLeft:widthToDp('1')}}>{props.time}</Text>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:widthToDp('5'),
        color:"red",
        fontWeight:"bold"
    },
    text1:{
        fontSize:widthToDp('5'),
        color:"#767575",
        fontWeight:"900"
    }
})

export default Box4;