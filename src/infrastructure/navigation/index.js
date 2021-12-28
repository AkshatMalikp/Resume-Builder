import React, { useContext } from "react";

import {createStackNavigator} from '@react-navigation/stack';
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./App.navigator";
const Stack = createStackNavigator();

export const Navigation=()=>{
    const {isAuthenticated} = useContext(AuthenticationContext);
    return(
        <NavigationContainer>
            {isAuthenticated?<AppNavigator/>:<AccountNavigator/>}
        </NavigationContainer>
    )
}

