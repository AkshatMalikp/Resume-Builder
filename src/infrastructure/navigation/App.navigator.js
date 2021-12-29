import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Settings } from "../../components/MainHome/Setting";
import { View,Image,Text } from "react-native";
import { HomeScreenNavigator } from "./HomeScreen.navigator";
const Tab = createBottomTabNavigator();

export const AppNavigator=()=> {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style:{
        height:70,
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        elevation:5,
        borderRadius:15,
        backgroundColor:'#C390ED'
      }

    }}
    >
      <Tab.Screen name="Main" component={HomeScreenNavigator}
      options={{
        tabBarIcon: ({focused})=>(
            <View>
            <Image source={require('../../assests/homeicon.jpg')} style={{

              width:25,
              height:25,
            }}/>


            <Text style={{fontSize:10,color :focused? '#F22613' :'black'}}> 
              Main
            </Text>



           </View>
           

        )
      }}  />
      <Tab.Screen name="Setting" component={Settings}
       options={{
        tabBarIcon: ({focused})=>(
            <View>
            <Image source={require('../../assests/settingsicon.jpg')} style={{

              width:25,
              height:25,
            }}/>


            <Text style={{fontSize:10,color :focused? '#F22613' :'black'}}> 
              Settings
            </Text>



           </View>
           

        )
      }}  />
    </Tab.Navigator>
  );
}