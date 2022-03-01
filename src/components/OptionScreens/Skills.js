import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { TextInput,View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { add_personal_details,get_personal_details } from "../../actions";
var DATA = [
    "hello",
    
  ];
  
const Skills=(props)=>{
    const dispatch = useDispatch();
    const [skill,setSkill]=useState(null);
    const presshandler=()=>{
    var b=skill;
     DATA.push(b)
     setSkill(null);

    }
    const presshandler2=()=>{
            dispatch(add_personal_details('skills',DATA));
            
   
       }
    const renderItem=({item})=>(
        <View style={{borderWidth:0.5,margin:20,borderRadius:10,}}>

            
<TextInput
style={{padding:10}}
placeholder="Enter Skill Name"
onChangeText={(val)=>{
  setSkill(val);
}}
/>
</View>
    )
    useEffect(()=>{
        console.log(props);
    })
    return(
        <SafeAreaView>
            <View>
                <FlatList data={DATA} extraData={DATA} renderItem={renderItem}/>
                <TouchableOpacity onPress={presshandler} style={{borderWidth:0.5,margin:20,borderRadius:10,justifyContent:'center',alignItems:'center',width:'85%',
         height:60,
         backgroundColor:'#DF6249',alignSelf:'center'}}>
          <Text style={{fontSize:20,}}>

           Add Another
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={presshandler2} style={{borderWidth:0.5,margin:20,borderRadius:10,justifyContent:'center',alignItems:'center',width:'85%',
         height:60,
         backgroundColor:'#DF6249',alignSelf:'center'}}>
          <Text style={{fontSize:20,}}>

           SUBMIT
          </Text>
      </TouchableOpacity>
           
</View>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) =>{
    const {
      skills,
      
  
    } = state.variables;
    return {
      skills,
  
    };
  }
  export default connect( mapStateToProps, {
  
    add_personal_details,
    get_personal_details
  
  } )( Skills );