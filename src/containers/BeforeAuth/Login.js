import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { ImageBackground, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginConfig } from "../../utils/apis/requestConfigs";
import { Box, Button, Center, Heading, Icon, Input, Text } from "native-base";
import useAxios from "../../hooks/Network/useAxios";
import { loginUser } from "../../redux/authslice";
import { moveToHomeScreen } from "../../navigation";
import Snackbar from "react-native-snackbar";
import { theme } from "../../utils/styles/theme";


export const Login = ({ componentId }) => {

  const dispatch = useDispatch();

  const { loading: loadingLogin, sendRequest: loginRequest } = useAxios();

  const login = (payload) => {
    loginRequest(loginConfig(payload), (data) => {
      if (data.token) {
        dispatch(loginUser(data));
        moveToHomeScreen();
      } else if (data.detail) {
        Snackbar.show({
          text: 'Invalid Credentials',
          duration: Snackbar.LENGTH_LONG,
        });

      }
    });
  };

  useEffect(() => {
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={theme.colors.primary["700"]}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Formik
          initialValues={{
            // username: "",
            // password: "",
            "grant_type": "password",
            "client_id": "salutmobile",
            "username": "Craigneill+tst3@gmail.com",
            "password": "Test123!!",
            "client_secret": "Qj2CcT86pgnaU2jS"

          }}
          onSubmit={(values) => {
            login(values);
          }}

        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <Center pt={80}>
              <Input
                mx="3"
                my="1"
                py="2"
                placeholder="Username"
                autoCapitalize="none"
                w={{
                  base: "85%",
                  md: "25%",
                }}
                id="username"
                name="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />

              <Input
                type={'text'}
                py="2"
                my="1"
                w={{
                  base: "85%",
                  md: "25%",
                }}
                id="password"
                name="password"
                placeholder="Password"
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                value={values.password}
              />

              <Button
                w={{
                  base: "85%",
                  md: "25%",
                }}

                onPress={handleSubmit}
                isLoading={loadingLogin}

              >Sign in</Button>


            </Center>
          )}

        </Formik>
      </ScrollView>
    </SafeAreaProvider>
  );
};


Login.options = {
  topBar: {
    visible: false,
  },
};

export default Login;
