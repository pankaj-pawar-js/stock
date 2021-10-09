import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import Loader from "./Loader";
import { fetchCurrencyList } from "../action";

function ListBox({ currencyList = [], fetchCurrencyList, navigation }) {
  useEffect(() => {
    // fetch data
    fetchCurrencyList();
  }, []);

  const render = () => {
    if (currencyList.length === 0) {
      return (
        <View style={styles.container}>
          <Loader />
        </View>
      );
    } else {
      return currencyList.map((item) => {
        return (
          <View key={item.id} style={styles.container}>
            <ListItem data={item} navigation={navigation} />
          </View>
        );
      });
    }
  };

  return render();
}

const mapStateToProps = (state) => {
  return {
    currencyList: state.currencyReducer.currencyList,
  };
};

const mapActionToProps = {
  fetchCurrencyList,
};

export default connect(mapStateToProps, mapActionToProps)(ListBox);

const styles = StyleSheet.create({
  container: {
    width: "calc(100% - 20px)",
    height: "60px",
    margin: "10px",
    padding: "10px",
    boxShadow: "0 0 5px 0 rgb(0 0 0 / 10%)",
    cursor: "pointer",
  },
});
