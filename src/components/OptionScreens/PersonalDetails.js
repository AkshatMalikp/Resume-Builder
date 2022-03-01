import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View,TextInput, TouchableOpacityBase, } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { ADD_PERSONAL_DETAILS,GET_PERSONAL_DETAILS } from "../../actions/Type";
import { useDispatch,useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { add_personal_details,get_personal_details } from "../../actions";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const PersonalDetails=(props)=>{
    const navigation=useNavigation();
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setemail]=useState("")
    const [phone,setPnum]=useState("")
    const dispatch = useDispatch();
    const pPresshandler=()=>{
        dispatch(add_personal_details('FirstName',fname));

        dispatch(add_personal_details('LastName',lname));

        dispatch(add_personal_details('email',email));
   
        dispatch(add_personal_details('Phone',phone));
        console.log(props);
        navigation.navigate("Skills")
    }
   
    useEffect(()=>{
    })
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

      <TouchableOpacity onPress={pPresshandler} style={{borderWidth:0.5,margin:20,borderRadius:10,justifyContent:'center',alignItems:'center',width:'85%',
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
const mapStateToProps = (state) =>{
    const {
  
      FirstName,
      LastName,
      email,
      Phone,
      
  
    } = state.variables;
    return {
        
      FirstName,
      LastName,
      email,
      Phone,
  
    };
  }
  export default connect( mapStateToProps, {
  
    add_personal_details,
    get_personal_details
  
  } )( PersonalDetails );
  

const styles=StyleSheet.create({


})