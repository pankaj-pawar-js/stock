import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem';

function CurrencyInfo({route}) {
  const {item} = route.params;
  return (
    <View>
      <ListItem data={item}/>
      <View>
        <Text> CurrencyInfo </Text>
        {Object.keys(item).map( val => (<Text key={val}> {val} : {JSON.stringify(item[val])}</Text>) )}
      </View>
    </View>
  );
}

export default CurrencyInfo;