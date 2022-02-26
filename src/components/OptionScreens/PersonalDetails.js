import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View,TextInput, TouchableOpacityBase, } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

import { TouchableOpacity } from "react-native";
export const PersonalDetails=()=>{
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setemail]=useState("")
    const [phone,setPnum]=useState("")
    const Presshandler=()=>{
       console.log(fname);
       console.log(lname);
       console.log(email);
       console.log(phone);
    }
    return(
        <SafeAreaView>
            <View style={{}}>
            <Text style={{marginLeft:20,fontSize:20}}>First Name</Text>
            <View style={{borderWidth:0.5,margin:20,borderRadius:10,}}>

            
            <TextInput
            style={{padding:10}}
        placeholder="Enter First Name"
        onChangeText={(val)=>{
            setFname(val)
        }}
      />
      </View>
      <Text style={{marginLeft:20,fontSize:20}}>Last Name</Text>
            <View style={{borderWidth:0.5,margin:20,borderRadius:10,}}>

            
            <TextInput
            style={{padding:10}}
        placeholder="Enter Last Name"
        onChangeText={(val)=>{
            setLname(val)
        }}
      />
      </View>
      <Text style={{marginLeft:20,fontSize:20}}>Email</Text>
            <View style={{borderWidth:0.5,margin:20,borderRadius:10,}}>

            
            <TextInput
            style={{padding:10}}
        placeholder="Enter Email"
        onChangeText={(val)=>{
            setemail(val)
        }}
      />
      </View>
      <Text style={{marginLeft:20,fontSize:20}}>Number</Text>
            <View style={{borderWidth:0.5,margin:20,borderRadius:10,}}>

            
            <TextInput
            style={{padding:10}}
        placeholder="Enter Phone Number"
        keyboardType="numeric"
        onChangeText={(val)=>{
            setPnum(val)
        }}
      />
      </View>

      <TouchableOpacity onPress={Presshandler()} style={{borderWidth:0.5,margin:20,borderRadius:10,justifyContent:'center',alignItems:'center',width:'85%',
         height:60,
         backgroundColor:'#DF6249',alignSelf:'center'}}>
          <Text style={{fontSize:20,}}>

           Submit
          </Text>
      </TouchableOpacity>

                
            </View>
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({


})