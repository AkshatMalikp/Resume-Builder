import React from "react";
import { StyleSheet, Text, View } from "react-native";
export const OptionCard=(props)=>{
return(

    <View style={styles.conatiner}>
        <Text style={{alignSelf:'center',marginTop:14,color:'white',fontSize:18,}}>{props.title}</Text>
    </View>
)
}

const styles=StyleSheet.create({

 conatiner:{
     width:'80%',
     elevation:5,
     backgroundColor:'#C390ED',
     height:60,
     alignSelf:'center',
     borderRadius:8,
     marginTop:10,
     marginBottom:10,

 }
})