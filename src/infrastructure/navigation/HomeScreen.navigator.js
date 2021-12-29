import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack=createStackNavigator();

import { Home } from "../../components/MainHome/Home";
import { ContactDetails } from "../../components/OptionScreens/ContactDetails";
import { PersonalDetails } from "../../components/OptionScreens/PersonalDetails";
import { Education } from "../../components/OptionScreens/Education";
import { Skills } from "../../components/OptionScreens/Skills";
import { Trainings } from "../../components/OptionScreens/Trainings";
import { Internships } from "../../components/OptionScreens/Internships";
import { Projects } from "../../components/OptionScreens/Projects";
import { Summary } from "../../components/OptionScreens/Summary";
import { DownloadResume } from "../../components/OptionScreens/DownloadResume";
export const HomeScreenNavigator=()=>{

    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown: false
          }}
        
        >
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="ContactDetails" component={ContactDetails} />
         <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
         <Stack.Screen name="Education" component={Education} />
         <Stack.Screen name="Skills" component={Skills} />
         <Stack.Screen name="Trainings" component={Trainings} />
         <Stack.Screen name="Internships" component={Internships} />
         <Stack.Screen name="Projects" component={Projects} />
         <Stack.Screen name="Summary" component={Summary} />
         <Stack.Screen name="DownloadResume" component={DownloadResume } />
        </Stack.Navigator>
    )
}