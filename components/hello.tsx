import React from "react";
import {Text, View} from "react-native";

function hello() {
  const name = "aru"
  return(
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
}


export default hello;