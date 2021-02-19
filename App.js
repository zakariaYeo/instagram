import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBYQtTB87Pj8nw3VxBg867oAaTxrY31C8",
    authDomain: "instagram-dev-f576f.firebaseapp.com",
    projectId: "instagram-dev-f576f",
    storageBucket: "instagram-dev-f576f.appspot.com",
    messagingSenderId: "1047678544501",
    appId: "1:1047678544501:web:211d54ab79344586d5663c",
    measurementId: "G-4W7V305RMV"
};
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}

import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import LandingScreen from "./components/auth/Landing";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
