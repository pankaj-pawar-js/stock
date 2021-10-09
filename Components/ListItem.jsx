import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function ListItem({ data, navigation }) {
  const {
    name,
    id,
    image,
    current_price,
    symbol,
    price_change_percentage_24h,
  } = data;

  const onClick = (e) => {
    navigation.navigate("Details", {item: data});
  }


  const priceChange = (val) => {
    if (val >= 0) {
      return <Text style={styles.green}> {val} </Text>;
    }
    return <Text style={styles.red}> {val} </Text>;
  };
  return (
    <TouchableOpacity onPress={ onClick }>
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          height='50'
          width='50'
          source={{ uri: image }}
        />
        <View>
          <Text style={styles.name}> {name} </Text>
          <Text style={styles.symbol}> {symbol.toUpperCase()} </Text>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.genericText}> ₹{current_price.toLocaleString("en-In")} </Text>
        {priceChange(price_change_percentage_24h)}
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    lineHeight: "20px",
  },
  parentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    lineHeight: "20px",
    backgroundColor: "#fff"
  },
  img: {
    height: "30px",
    width: "30px",
  },
  symbol: {
    fontSize: "14px",
    color: "#86a0c2",
    lineHeight: '20px'
  },
  red: {
    color: "red",
    lineHeight: '20px'
  },
  green: {
    color: "rgb(0, 198, 115)",
    lineHeight: '20px'
  },
  priceContainer: {
    textAlign: "right",
  },
  genericText: {
      lineHeight: '20px'
  },
  name: {
    fontWeight: '700',
    lineHeight: '20px'
}
});
