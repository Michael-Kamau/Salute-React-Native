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
import { moveToHomeScreen } from "./src/navigation";
import { Heading, Spinner } from "native-base";

import {theme} from "./src/utils/styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";


const App = (props) => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {

    setTimeout(() => {
      moveToHomeScreen()
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
