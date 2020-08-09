import React ,{useState}from 'react';
import {Text,View,StyleSheet,StatusBar,TouchableOpacity,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthToDp,heightToDp} from '../Responsive';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import Box from '../component/Box';
import Box2 from '../component/Box2';
import Box3 from '../component/Box3';
import Box4 from '../component/Box4';
const HomeScreen =()=>{
    const [show,setShow]=useState(false)

    const renderPost=()=>{
        if(show){
            return(<>
                <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:heightToDp('4')}}>
                   <Box title="Chowmein" link={require('../screen/Assets/chowmein.jpg')}/> 
                   <Box title="Ice cream" link={require('../screen/Assets/icecream.jpg')}/> 
                   <Box title="Dosa" link={require('../screen/Assets/dosa.jpg')}/> 
                   <Box title="Cake" link={require('../screen/Assets/cake.jpg')}/> 
                  
                </View>

                <TouchableOpacity style={{marginTop:heightToDp('5.3')}} onPress={()=>{setShow(false)}}>
                <View style={{backgroundColor:"#F3F2F2",marginHorizontal:widthToDp('3')}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",padding:widthToDp('1.3')}}>
                    <Text style={{alignSelf:"center"}}>see less</Text>
                    <Ionicons name="arrow-up-circle" size={widthToDp('3.5')} />
                    </View>
                </View>
                </TouchableOpacity>
                </>
            )
        }
        return (
            <TouchableOpacity style={{marginTop:heightToDp('5.3')}} onPress={()=>{setShow(true)}}>
            <View style={{backgroundColor:"#F3F2F2",marginHorizontal:widthToDp('3')}}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",padding:widthToDp('1.3')}}>
                 <Text style={{alignSelf:"center"}}>see more</Text>
                 <Ionicons name="arrow-down-circle" size={widthToDp('3.5')} />
                 </View>
            </View>
            </TouchableOpacity>
        )
       
    }
    return(
        <>
        <View style={{flex:1,backgroundColor:"white",}}>
            <StatusBar translucent backgroundColor="#FAFAFA" barStyle="dark-content"/>
            <View style={{marginTop:heightToDp('3.5'),paddingTop:heightToDp('1.8'),flexDirection:"row",marginLeft:widthToDp('2.2'),marginBottom:0}}>
                <Ionicons name="home-outline" size={widthToDp('7')} />
                <View style={{marginLeft:widthToDp('1.5')}}>
                    <Text style={{fontWeight:"bold",fontSize:widthToDp('4')}}>Home</Text>
                    <Text style={{color:"#767575",fontSize:widthToDp('3.2')}}>Fuljhore, Durgapur</Text>
                </View>
             
            </View>
            <ScrollView>
            <Text style={{marginLeft:widthToDp('3.5'),color:"#979494",marginTop:heightToDp('0'),position:"absolute"}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>

            <View style={{borderWidth:0.5,marginTop:heightToDp('2.2'),marginHorizontal:widthToDp('3'),flexDirection:"row",padding:widthToDp('2.4'),borderRadius:widthToDp('0.6'),alignItems:"center",borderColor:"#D5D2D1"}}>
                <AntDesign name="search1" size={widthToDp('4')} />
                <Text style={{color:"#CECCCC",fontSize:widthToDp('3.5'),paddingLeft:widthToDp('1'),fontWeight:"bold"}}> Search for the restaurants, cuisines...</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",padding:widthToDp('3.5')}}>
                <Text style={styles.text}>food</Text>
                <Text style={styles.text1}>market</Text>
                <Text style={styles.text1}>wineshops</Text>
                <Text style={styles.text1}>self pickup</Text>
            </View>

            <FastImage source={require('./Assets/Zomatoo.jpg')} style={{height:heightToDp('30'),width:widthToDp('93'),alignSelf:"center",borderRadius:widthToDp('1'),marginTop:heightToDp('1')}}/>
            
            <Text style={{color:"black",fontSize:widthToDp('4.8'),paddingLeft:widthToDp('2'),fontWeight:"bold",paddingTop:widthToDp('5'),marginLeft:widthToDp('2')}}>Lockdown cravings</Text>
            
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:heightToDp('0.5')}}>
               <Box title="Biryani" link={require('../screen/Assets/biryani.jpg')}/> 
               <Box title="Chicken" link={require('../screen/Assets/chicken.jpg')}/> 
               <Box title="Paratha" link={require('../screen/Assets/paratha.jpg')}/> 
               <Box title="Thali" link={require('../screen/Assets/thali.jpg')}/> 
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:heightToDp('4')}}>
               <Box title="Pizza" link={require('../screen/Assets/pizza.jpg')}/> 
               <Box title="Paneer" link={require('../screen/Assets/paneer.jpg')}/> 
               <Box title="Burger" link={require('../screen/Assets/burger.jpg')}/> 
               <Box title="Rolls" link={require('../screen/Assets/rolls.jpg')}/> 
            </View>
            {renderPost()}

            <Text style={{color:"#767575",fontSize:widthToDp('3.2'),marginLeft:widthToDp('3'),marginTop:heightToDp('2.8')}}>LATEST OFFERS</Text>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:heightToDp('1.2')}}>
                    <FastImage source={require('./Assets/ban1.jpg')} style={{height:heightToDp('12'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                    <FastImage source={require('./Assets/ban2.jpg')} style={{height:heightToDp('12'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                    <FastImage source={require('./Assets/ban1.jpg')} style={{height:heightToDp('12'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
            </View>
            <Text style={{color:"#767575",fontSize:widthToDp('3.2'),marginLeft:widthToDp('3'),marginTop:heightToDp('2.8')}}>QUICK LINKS</Text>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:heightToDp('1.2')}}>
                    <FastImage source={require('./Assets/fresh.jpg')} style={{height:heightToDp('8'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                    <FastImage source={require('./Assets/veg.png')} style={{height:heightToDp('8'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                    <FastImage source={require('./Assets/nonveg.png')} style={{height:heightToDp('8'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                    <FastImage source={require('./Assets/fruit.jpg')} style={{height:heightToDp('8'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                   
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:heightToDp('1.2')}}>
                    <FastImage source={require('./Assets/fresh.jpg')} style={{height:heightToDp('8'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                    <FastImage source={require('./Assets/veg.png')} style={{height:heightToDp('8'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                    <FastImage source={require('./Assets/nonveg.png')} style={{height:heightToDp('8'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                    <FastImage source={require('./Assets/fruit.jpg')} style={{height:heightToDp('8'),width:widthToDp('22'),borderRadius:widthToDp('0.8')}}/>
                   
            </View>

            <Text style={{color:"black",fontSize:widthToDp('4.7'),paddingLeft:widthToDp('3'),fontWeight:"bold",marginTop:widthToDp('8')}}>56 places delivering to you</Text>
            <Text style={{color:"#767575",fontSize:widthToDp('3.2'),paddingLeft:widthToDp('3')}}>Everything in a list - go nuts!</Text>
            <Box2 title="Royal India Restaurant" rate="3.1" dev="(15726 Delivery Votes)" item="Biryani, North Indian, Mughlai, Kebab" time="200 for one. 36 mins" link={require('../screen/Assets/pizza.jpg')}/> 
            <Box2 title="Areena Mortel" rate="4.3" dev="(8731 Delivery Votes)" item="Indian, Chowmein Store" time="200 for one. 19 mins" link={require('../screen/Assets/chowmein.jpg')}/> 
            <Box2 title="Hotel Kohetoor" rate="3.7" dev="(1231 Delivery Votes)" item=" North Indian, Biryani" time="200 for one. 49 mins" link={require('../screen/Assets/biryani.jpg')}/> 
            <Box2 title="Hotel Bajarang" rate="4.1" dev="(7731 Delivery Votes)" item="Indian, Cake store" time="200 for one. 29 mins" link={require('../screen/Assets/cake.jpg')}/> 
           
            <Text style={{color:"black",fontSize:widthToDp('4.8'),paddingLeft:widthToDp('2'),fontWeight:"bold",paddingTop:widthToDp('5'),marginLeft:widthToDp('2')}}>Trending cuisines around you</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:widthToDp('2'),margin:widthToDp('1')}}>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:heightToDp('1.2')}}>
                <Box3 title="Biryani" link={require('../screen/Assets/biryani.jpg')}/>
                <Box3 title="Chinese" link={require('../screen/Assets/chowmein.jpg')}/>
                <Box3 title="North Indian" link={require('../screen/Assets/thali.jpg')}/>
                <Box3 title="South Indian" link={require('../screen/Assets/idli.jpg')}/>
                <Box3 title="Punjabi" link={require('../screen/Assets/punjabi.jpg')}/>
            </View>
            </ScrollView>
            <Box2 title="Hotel Rajwansh" rate="3.1" dev="(15726 Delivery Votes)" item="Egg Curry, All Indian, Mughlai, Kebab" time="200 for one. 36 mins" link={require('../screen/Assets/egg.jpg')}/> 
            <Box2 title="Shayam Hotel" rate="2.3" dev="(2731 Delivery Votes)" item="Indian, Store" time="190 for one. 19 mins" link={require('../screen/Assets/puri.jpg')}/> 
            <Box2 title="Biryani Hotel" rate="3.7" dev="(1231 Delivery Votes)" item=" North Indian, Biryani" time="200 for one. 49 mins" link={require('../screen/Assets/biryani.jpg')}/> 
            <Box2 title="Royal Retrets" rate="2.1" dev="(7731 Delivery Votes)" item="Indian, Samosa store" time="200 for one. 29 mins" link={require('../screen/Assets/samosa.jpg')}/> 
            
            <Text style={{color:"black",fontSize:widthToDp('4.7'),paddingLeft:widthToDp('3'),fontWeight:"bold",marginTop:widthToDp('8')}}>Try these restaurants</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:widthToDp('2'),margin:widthToDp('1')}}>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:heightToDp('1.2')}}>
                <Box4 title="Hotel Rajwansh" rate="3.1" dev="(15726)" item="Egg Curry, All Indian, Mughlai, Kebab" time="200 for one. 36 mins" link={require('../screen/Assets/egg.jpg')}/> 
                <Box4 title="Shayam Hotel" rate="2.3" dev="(2731)" item="Indian, Store" time="190 for one. 19 mins" link={require('../screen/Assets/puri.jpg')}/> 
                <Box4 title="Biryani Hotel" rate="3.7" dev="(1231)" item=" North Indian, Biryani" time="200 for one. 49 mins" link={require('../screen/Assets/biryani.jpg')}/> 
                <Box4 title="Royal Retrets" rate="2.1" dev="(7731)" item="Indian, Samosa store" time="200 for one. 29 mins" link={require('../screen/Assets/samosa.jpg')}/> 
            </View>
            </ScrollView>

            <Box2 title="Hotel Tej" rate="3.1" dev="(15726 Delivery Votes)" item="Paneer Curry, All Indian, Paneer" time="200 for one. 36 mins" link={require('../screen/Assets/paneer.jpg')}/> 
            <Box2 title="Raj Hotel" rate="2.3" dev="(2731 Delivery Votes)" item="Indian desi paratha, Store" time="190 for one. 19 mins" link={require('../screen/Assets/paratha.jpg')}/> 
           
            <Text style={{color:"black",fontSize:widthToDp('4.7'),paddingLeft:widthToDp('3'),fontWeight:"bold",marginTop:widthToDp('8')}}>Order from rated places</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:widthToDp('2'),margin:widthToDp('1')}}>
            <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:heightToDp('1.2')}}>
                <Box4 title="Biryani Hotel" rate="3.7" dev="(1231)" item=" North Indian, Biryani" time="200 for one. 49 mins" link={require('../screen/Assets/biryani.jpg')}/> 
                <Box4 title="Royal Retrets" rate="2.1" dev="(7731)" item="Indian, Samosa store" time="200 for one. 29 mins" link={require('../screen/Assets/samosa.jpg')}/> 
                <Box4 title="Hotel Rajwansh" rate="3.1" dev="(15726)" item="Egg Curry, All Indian, Mughlai, Kebab" time="200 for one. 36 mins" link={require('../screen/Assets/egg.jpg')}/> 
                <Box4 title="Shayam Hotel" rate="2.3" dev="(2731)" item="Indian, Store" time="190 for one. 19 mins" link={require('../screen/Assets/puri.jpg')}/> 
                
            </View>
            </ScrollView>
            <Box2 title="Hotel Biku" rate="4.1" dev="(15726 Delivery Votes)" item="Ice Cream" time="200 for one. 36 mins" link={require('../screen/Assets/icecream.jpg')}/> 
            <Box2 title="Niraj Hotel" rate="2.3" dev="(2731 Delivery Votes)" item="Indian roll, Store" time="190 for one. 19 mins" link={require('../screen/Assets/rolls.jpg')}/> 
        </ScrollView>
        </View>
        </>
       
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:widthToDp('5'),
        color:"red",
        fontWeight:"900"
    },
    text1:{
        fontSize:widthToDp('5'),
        color:"#767575",
        fontWeight:"900"
    }
})

export default HomeScreen;
