import React from 'react';
import {Text,View,StyleSheet,StatusBar} from 'react-native';

import {widthToDp,heightToDp} from '../Responsive';

import FastImage from 'react-native-fast-image';
const Box3=(props)=>{
    
    return(<>
        <View style={{marginLeft:widthToDp('2.5'),height:heightToDp('25'),width:widthToDp('36'),borderRadius:widthToDp('0.5'),marginTop:heightToDp('1')}}>
                <FastImage source={props.link} style={{height:heightToDp('20'),width:widthToDp('35'),borderRadius:widthToDp('0.8')}}/>
                <Text style={{color:"#767575",fontSize:widthToDp('3.5'),marginTop:heightToDp('1')}}>{props.title}</Text>
               
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

export default Box3;