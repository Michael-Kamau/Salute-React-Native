import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { FlatList, StatusBar } from "react-native";
import {  useSelector } from "react-redux";
import { displayDataConfig } from "../../utils/apis/requestConfigs";
import useAxios from "../../hooks/Network/useAxios";
import { Box, Heading, HStack, Spinner, Text, View, VStack } from "native-base";
import { theme } from "../../utils/styles/theme";



export const Home = ({ componentId }) => {

  const {auth} = useSelector((state) => state)

  const [displayData, setDisplayData] = useState([])

  const { loading: loadingData, sendRequest: dataRequest } = useAxios();

  const fetchData = (payload) => {
    dataRequest(displayDataConfig(auth.access_token), (data) => {
      setDisplayData(data)
    });
  };

  useEffect(() => {
    fetchData()
  }, []);

  const renderItem = ({ item, index }) => (
    <VStack bgColor='white' p={5} m={2} shadow="3" key={index}>
      <HStack>
        <Text>Key:</Text>
        <Text>{' '+item.key}</Text>
      </HStack>
      <HStack>
        <Text>User Id: </Text>
        <Text>{' '+item.userID}</Text>
      </HStack>
      <HStack>
        <Text>Is Sensitive: </Text>
        <Text>{' '+item.isSensitive}</Text>
      </HStack>

    </VStack>
  );

  return (
    <SafeAreaProvider >
      <StatusBar
        backgroundColor={theme.colors.primary["700"]}
      />
      <Heading size={'sm'} mt={20}>Data Fetched</Heading>
        {loadingData && (
          <Spinner/>
        )}
        <FlatList
          data={displayData}
          renderItem={renderItem}
        />

    </SafeAreaProvider>
  );
};


Home.options = {
  topBar: {
    visible: false,
  },
};

export default Home;
