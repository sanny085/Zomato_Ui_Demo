import React from 'react';
import {View,Text} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from './screen/HomeScreen';
import HistoryScreen from './screen/HistoryScreen';
import VideoScreen from './screen/VideosScreen';
import ProfileScreen from './screen/ProfileScreen';
import FastImage from 'react-native-fast-image';
import {widthToDp,heightToDp} from './Responsive';
import {Avatar} from 'react-native-paper';



const switchNavigator=createSwitchNavigator({
  x:createMaterialBottomTabNavigator({
  Order: { screen: HomeScreen,  
      navigationOptions:{  
          tabBarLabel:'Order',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                    <SimpleLineIcons name="bag" size={widthToDp('5.5')} style={[{color: tintColor}]}/>
              </View>),  
      }  
  },
  History: { screen: HistoryScreen,  
    navigationOptions:{  
        tabBarLabel:'History',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                 <Ionicons name="md-newspaper-outline" size={widthToDp('5.5')} style={[{color: tintColor}]}/>
            </View>),  
        activeColor: 'black',  
        inactiveColor: '#B8B8B8',  
        barStyle: { backgroundColor: 'white' },  
    }  
},

  Videos: { screen: VideoScreen,  
      navigationOptions:{  
          tabBarLabel:'Videos',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                <Feather name="youtube" size={widthToDp('5.5')} style={[{color: tintColor}]}/>
              </View>),  
          activeColor: 'black',  
          inactiveColor: '#B8B8B8',  
          barStyle: { backgroundColor: 'white' },  
      }  
  },
  Profile: { screen: ProfileScreen,  
    navigationOptions:{  
        tabBarLabel:'Profile',  
        tabBarIcon: () => (  
            <View>  
                  <Avatar.Image size={widthToDp('5.2')} source={require('./screen/Assets/nik.jpg')} />
            </View>),  
         activeColor: 'black',    
         inactiveColor: '#B8B8B8',   
        barStyle: { backgroundColor: 'white' },  
    }  
}

  },
  {  
    initialRouteName: "Order",  
    activeColor: 'black',    
    inactiveColor: '#B8B8B8',  
    barStyle: { backgroundColor: 'white' },  
  },  
  )
 
})

           
const App=createAppContainer(switchNavigator);

export default ()=>{     
return(
            <App/>
        )
}
