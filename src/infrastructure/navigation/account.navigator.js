import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack=createStackNavigator();
import { HomeLogin } from "../../components/Accounts/HomeLogin";
import { Login } from "../../components/Accounts/Login";
import { Register } from "../../components/Accounts/Register";
export const AccountNavigator=()=>{

    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown: false
          }}
        
        >
         <Stack.Screen name="HomeLogin" component={HomeLogin} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name ="Register" component={Register} />
        </Stack.Navigator>
    )
}