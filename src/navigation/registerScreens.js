import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux';
import {Navigation} from 'react-native-navigation';

import Root from "../containers/Root";
import App from "../../App";
import Home from "../containers/Home";


export const registerScreens = () => {
  //Root Screen
  Navigation.registerComponent("App", () => (props) =>
    <Provider store={store}>
      <Root PassedComponent={App} componentProps={props}/>
    </Provider>, () => App);

  Navigation.registerComponent("Home", () => (props) =>
    <Provider store={store}>
      <Root PassedComponent={Home} componentProps={props}/>
    </Provider>, () => Home);

};
