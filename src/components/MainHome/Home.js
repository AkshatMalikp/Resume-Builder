import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { OptionCard } from "./Option";
export const Home=({navigation})=>{
    return(
        <SafeAreaView>
            <Text style={{alignSelf:'center',marginTop:20,}}>Enter All The Details

            </Text>
            <View style={{marginTop:40,marginBottom:175,}}>
            <ScrollView>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('ContactDetails')
                }}>
                <OptionCard title='Contact Details*' />
                </TouchableOpacity>
            
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('PersonalDetails')
                }}>
                <OptionCard title='Personal Details*' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Education')
                }}>
                <OptionCard title='Education*' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Skills')
                }}>
                <OptionCard title='Skills' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Trainings')
                }}>
                <OptionCard title='Trainings' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Internships')
                }}>
                <OptionCard title='Internships' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Projects')
                }}>
                <OptionCard title='Projects' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Summary')
                }}>
                <OptionCard title='Summary' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('DownloadResume')
                }}>
                <OptionCard title='Download Resume' />
                </TouchableOpacity>
                </ScrollView>
            </View>
        
        </SafeAreaView>
    )
}