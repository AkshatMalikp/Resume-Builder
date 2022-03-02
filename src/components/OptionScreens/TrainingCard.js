import React, { useEffect } from "react";
import { StyleSheet, View,Text,TextInput, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import { useState } from "react";
import { Button } from "react-native";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { add_personal_details,get_personal_details,add_to_array } from "../../actions";
const TrainingCard=(props)=>{
    
    const dispatch = useDispatch();
    const [datebeg, setDatebeg] = useState(new Date())
    const [descrip,setDescrip]=useState(null);
    const [openb, setOpenb] = useState(false)
    const [dateend, setDateend] = useState(new Date())
    const [opene, setOpene] = useState(false)
    const presshandler2=()=>{
        var b={
            Description:descrip,
            DateStart:datebeg,
            DateEnd:dateend,
        }
        dispatch(add_to_array('trainings',b))
    }
    useEffect(()=>{
   console.log(props);
    })
    return(
        <View style={{width:'90%',height:260,alignSelf:'center',borderRadius:10,backgroundColor:'#DF6249',shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,elevation: 5}}>
             <View style={{borderWidth:0.5,margin:20,borderRadius:10,backgroundColor:'white',height:'30%'}}>

            
<TextInput
multiline
style={{padding:10,alignSelf:'center',}}
placeholder="Enter Description of training"
onChangeText={(val)=>{
    setDescrip(val)
}}
/>

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:'5%',marginRight:'5%'}}>
<TouchableOpacity style={{width:'48%',height:30,backgroundColor:'lightblue',justifyContent:'center',alignItems:'center',borderRadius:5,}}  onPress={() => setOpenb(true)}><Text>Change Starting Date</Text></TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={openb}
        date={datebeg}
        onConfirm={(date) => {
          setOpenb(false)
          setDatebeg(date)
        }}
        onCancel={() => {
          setOpenb(false)
        }}
      />
     <TouchableOpacity style={{width:'48%',height:30,backgroundColor:'lightblue',justifyContent:'center',alignItems:'center',borderRadius:5,}}  onPress={() => setOpene(true)}><Text>Change End Date</Text></TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={opene}
        date={dateend}
        onConfirm={(date) => {
          setOpene(false)
          setDateend(date)
        }}
        onCancel={() => {
          setOpene(false)
        }}
      />
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:'10%',marginRight:'10%',marginTop:30,}}>
    

    
  <Text style={{color:'white'}}> {moment(datebeg).format('Do MMMM YYYY')}</Text>
  <Text style={{color:'white'}}> {moment(dateend).format('Do MMMM YYYY')}</Text>

</View>
<TouchableOpacity onPress={presshandler2} style={{borderWidth:0.5,margin:20,borderRadius:10,justifyContent:'center',alignItems:'center',width:'85%',
         height:30,
         backgroundColor:'lightblue',alignSelf:'center'}}>
          <Text style={{fontSize:20,}}>

           SUBMIT
          </Text>
      </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = (state) =>{
    const {
      trainings,
      
  
    } = state.variables;
    return {
      trainings,
  
    };
  }
  export default connect( mapStateToProps, {
  
    add_personal_details,
    get_personal_details,
    add_to_array,
    
  
  } )( TrainingCard );