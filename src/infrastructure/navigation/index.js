import React from "react";

import {createStackNavigator} from '@react-navigation/stack';
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigation=()=>{
    return(
        <NavigationContainer>

        
        <AccountNavigator />
        </NavigationContainer>
    )
}

