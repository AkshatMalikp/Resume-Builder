import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbC0yGDiQYLvWQ3TBfSnaUJ0UqZynvLMU",
  authDomain: "resume-builder-7512b.firebaseapp.com",
  projectId: "resume-builder-7512b",
  storageBucket: "resume-builder-7512b.appspot.com",
  messagingSenderId: "948463449025",
  appId: "1:948463449025:web:6eb2769eb0a8ad43163540",
  measurementId: "G-GEHG21CHF7"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  
    return (
      <View style={styles.container}>
        <AuthenticationContextProvider>

        
        <Navigation />
        </AuthenticationContextProvider>
        <StatusBar style="auto" />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
