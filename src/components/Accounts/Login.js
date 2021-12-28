import React from "react";
import { Text,View } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Login=()=>{
  const [email,setemail]=useState('');
  const [Password,setpassword]=useState('');
    return(
        <SafeAreaView>

        
        <View style={styles.container}>

        <Text style={{fontSize:35,alignSelf:'center',marginTop:60,}}>Welcome back  </Text>
        <Text style={{fontSize:20,alignSelf:'center'}}>You have been Missed </Text>

        <TextInput placeholder="Enter Email" style={{marginTop:70, ...styles.input}} onChangeText={(text)=>{
            setemail(text);
        }}/>
        <TextInput placeholder="Enter Password" style={{marginTop:20, ...styles.input}} onChangeText={(text)=>{
            setpassword(text);
        }} />
        <TouchableOpacity>
        <View style={styles.button}>
            <Text style={{alignSelf:'center',marginTop:15,fontSize:20,}}> Sign In </Text>
        </View>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#FDF6FD',
    },
    input:{
         width:'85%',
         height:60,
         backgroundColor:'white',
         alignSelf:'center',
         borderRadius:10,
    },
    button:{
        width:'85%',
         height:60,
         backgroundColor:'#DF6249',
         alignSelf:'center',
         borderRadius:10,
         marginTop:80,
    }
})
