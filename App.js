import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import ListBox from "./Components/ListBox";
import reducer, { INITIAL_STATE } from "./reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Components/Home";
import CurrencyInfo from "./Components/CurrencyInfo";

const store = createStore(reducer, {}, applyMiddleware(thunk));
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={CurrencyInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
