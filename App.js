import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/infrastructure/navigation';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import * as firebase from "firebase";
import { add_personal_details } from './src/actions';
import { get_personal_details } from './src/actions';
import { connect } from 'react-redux';
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
  const store = createStore(reducers, applyMiddleware(thunk)) ;
  LogBox.ignoreAllLogs();
    return (
      
     <Provider store={store}>
      <View style={styles.container}>
        <AuthenticationContextProvider>

        
        <Navigation />
        </AuthenticationContextProvider>
        <StatusBar style="auto" />
      </View>
      </Provider>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
