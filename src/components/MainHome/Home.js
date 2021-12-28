import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { useContext } from "react";
export const Home=()=>{
    const {onLogout,error} = useContext(AuthenticationContext);
    return(
        <SafeAreaView>
            <TouchableOpacity 
            onPress={()=>onLogout()}>

            
        <Text>
            Hello
        </Text>
        </TouchableOpacity>
        
        </SafeAreaView>
    )
}