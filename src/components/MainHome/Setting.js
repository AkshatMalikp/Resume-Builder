import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { useContext } from "react";
import { TouchableOpacity ,View,StyleSheet} from "react-native";
export const Settings=()=>{
    const {onLogout,error} = useContext(AuthenticationContext);
    return(
        <SafeAreaView>
             <TouchableOpacity onPress={() => onLogout()} >
        <View style={styles.button}>
            <Text style={{alignSelf:'center',marginTop:15,fontSize:20,}}> Logout </Text>
        </View>

        
        </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles=StyleSheet.create({

    button:{
        width:'85%',
         height:60,
         backgroundColor:'#DF6249',
         alignSelf:'center',
         borderRadius:10,
         marginTop:60,
    }
    })