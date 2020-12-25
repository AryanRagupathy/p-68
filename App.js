import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import {createAppContainer} from 'react-navigation';

import Facebook from './screens/facebook';
import Instagram from './screens/Instagram.js';

export default class App extends Component {
  render() {
    return(
      
       <AppContainer/>
       );
  }
}
const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: Facebook},
  Instagram: {screen: Instagram},
},);




    


const AppContainer = createAppContainer(TabNavigator)



