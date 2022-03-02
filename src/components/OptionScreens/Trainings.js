import React, { useEffect }  from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import TrainingCard from "./TrainingCard";
import {View,FlatList,TouchableOpacity} from 'react-native';


var DATA=['1']

export const Trainings=()=>{
    const renderI=()=>(
        
        <View style={{marginTop:10,marginBottom:10,}}>
        <TrainingCard/>
        </View>
    )
    const presshandler=()=>{
        var b='1'
        DATA.push(b)
    }
    useEffect(()=>{
        console.log(DATA);
    })
    return(
        <SafeAreaView>
            <FlatList data={DATA} extraData={DATA} renderItem={renderI} />
            <TouchableOpacity onPress={presshandler} style={{borderWidth:0.5,margin:20,borderRadius:10,justifyContent:'center',alignItems:'center',width:'85%',
         height:50,
         backgroundColor:'#DF6249',alignSelf:'center'}}>
          <Text style={{fontSize:20,color:'white'}}>

           Add Another
          </Text>
      </TouchableOpacity>   
        </SafeAreaView>
    )
}