import React, {useEffect} from "react";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {ImageBackground, ScrollView, StyleSheet} from "react-native";
import {useDispatch} from "react-redux";

import { Box, Heading, Text } from "native-base";

export const Home = (props) => {

  const dispatch= useDispatch()

  useEffect(() => {
  }, [])

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ScrollView contentContainerStyle={{paddingBottom: 60}}>
          <Box p={3}>
            <Heading >Salut App</Heading>
          </Box>
      </ScrollView>
    </SafeAreaProvider>
  );
}


Home.options = {
  topBar: {
    visible: false,
  }
}

export default Home;
