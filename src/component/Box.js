import React from 'react';
import {Text,View,StyleSheet,StatusBar} from 'react-native';

import {widthToDp,heightToDp} from '../Responsive';

import FastImage from 'react-native-fast-image';
const Box=(props)=>{
    
    return(
        <View style={{paddingLeft:widthToDp('1.2'),height:heightToDp('10'),width:widthToDp('22'),borderRadius:widthToDp('0.5'),marginTop:heightToDp('1')}}>
                <FastImage source={props.link} style={{height:heightToDp('10'),width:widthToDp('20'),borderRadius:widthToDp('0.8')}}/>
                <Text style={{alignSelf:'center',color:"#767575",fontSize:widthToDp('3.5'),marginTop:heightToDp('0.8')}}>{props.title}</Text>
        </View>
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

export default Box;
