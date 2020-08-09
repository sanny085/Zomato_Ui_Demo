import React from 'react';
import {Text,View,StyleSheet,StatusBar} from 'react-native';

import {widthToDp,heightToDp} from '../Responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
const Box2=(props)=>{
    
    return(<>
        <View style={{height:heightToDp('22'),width:widthToDp('92'),borderRadius:widthToDp('0.5'),marginTop:heightToDp('3'),alignSelf:"center"}}>
                <FastImage source={props.link} style={{height:heightToDp('22'),width:widthToDp('94'),borderRadius:widthToDp('0.8'),alignSelf:"center"}}/>
                
        </View>
        
    <Text style={{color:"black",fontSize:widthToDp('4'),marginLeft:widthToDp('7'),fontWeight:"bold",paddingTop:widthToDp('5')}}>{props.title}</Text>
        <View style={{flexDirection:"row",marginLeft:widthToDp('7'),alignItems:"center"}}>
                <Ionicons name="ios-star-sharp" size={widthToDp('4')}  color="red"/>
                <Ionicons name="ios-star-sharp" size={widthToDp('4')}  color="red"/>
                <Ionicons name="ios-star-sharp" size={widthToDp('4')} color="red"/>
                <Ionicons name="ios-star-sharp" size={widthToDp('4')} color="#767575"/>
                <Ionicons name="ios-star-half-sharp" size={widthToDp('4')} color="#767575"/>
    <Text style={{fontSize:widthToDp('3.2'),marginLeft:widthToDp('4'),alignSelf:"center",fontWeight:"bold"}}>{props.rate}</Text>
    <Text style={{color:"#767575",fontSize:widthToDp('3.4'),marginLeft:widthToDp('1')}}>{props.dev}</Text>
                
        </View>
    <Text style={{color:"#767575",fontSize:widthToDp('3.2'),marginLeft:widthToDp('7')}}>{props.item}</Text>
    <Text style={{color:"#767575",fontSize:widthToDp('3.2'),marginLeft:widthToDp('7')}}>{props.time}</Text>
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

export default Box2;