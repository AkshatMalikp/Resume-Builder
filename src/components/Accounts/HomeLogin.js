import React from "react";
import { Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export const HomeLogin=({navigation})=>{
    return(
        <SafeAreaView>
            <View style={styles.conatiner}>

           
           <Image source={require('../../assests/Homelogin.jpg')} style={styles.image} />
             <Text style={{fontSize:40,alignSelf:'center'}}>Create your  </Text>
             <Text style={{fontSize:40,alignSelf:'center'}}>Resume in minutes </Text>
             <Text style={{fontSize:14,alignSelf:'center',marginTop:20,color:'grey'}}>Makes resume writing pain-free, fast and straightforward </Text>
             <Text style={{fontSize:14,alignSelf:'center',color:'grey'}}>Designed to help anyone from any field </Text>
             
             <View style={{flexDirection:'row',alignItems:'center',marginLeft:45,marginTop:80,}}>
                 <TouchableOpacity onPress={()=>{
                     navigation.navigate('Login')
                 }}> 

                 
                 <View style={{height:50,width:140,backgroundColor:'white',borderRadius:10,marginRight:20,}}>
                   <Text style={{alignSelf:'center',marginTop:9,fontSize:20,}}>
                       Login
                   </Text>
                 </View>
                 </TouchableOpacity>
                 <TouchableOpacity 
                 onPress={()=>{
                    navigation.navigate('Register')
                }}>
                     
                 
                 <View style={{height:50,width:140,backgroundColor:'white',borderRadius:10,}}>
                   <Text style={{alignSelf:'center',marginTop:9,fontSize:20,}}>
                       Register
                   </Text>
                 </View>
                 </TouchableOpacity>
                 
             </View>
             </View>
               </SafeAreaView> 
        
    )
}


const styles=StyleSheet.create({

image:{
 width:'92%',
 height:'50%',
 alignSelf:'center',
 borderRadius:15,
 marginTop:15,
 marginBottom:30,
},
conatiner:{
    height:'100%',
    width:'100%',
    backgroundColor:'#FDF6FD',
}

})