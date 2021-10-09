import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ListBox from "./ListBox";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.currencyHeading}>Popular Currencies</Text>
      <StatusBar style='auto' />
      <ListBox navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(252, 254, 255)",
    padding: "10px",
  },
  currencyHeading: {
    fontSize: "16px",
    fontWeight: "700",
    marginLeft: "10px",
  },
});
