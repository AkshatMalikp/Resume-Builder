import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../../components/MainHome/Home";

const Tab = createBottomTabNavigator();

export const AppNavigator=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}