/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import {
  SafeAreaView, StatusBar,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { moveToAuthScreen, moveToHomeScreen } from "./src/navigation";
import { Heading, Spinner } from "native-base";

import {theme} from "./src/utils/styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { useSelector } from "react-redux";


const App = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {auth} = useSelector((state) => state)


  useEffect(() => {

    setTimeout(() => {
      auth.access_token !== null ? moveToHomeScreen() : moveToAuthScreen()
    }, 3500)

  });

  return (
    <SafeAreaProvider >
      <StatusBar
        backgroundColor={theme.colors.primary["700"]}
      />

      <View style={{
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: theme.colors.primary['700']
      }}>
        <Spinner/>
        <Heading style={{
          color: 'white',
          textAlign: 'center'
        }}>Welcome</Heading>
        <Text style={{
          color: 'white',
          textAlign: 'center',
        }}>Salute Code Challenge</Text>
      </View>
    </SafeAreaProvider>
  );
};



export default App;
