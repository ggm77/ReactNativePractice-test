import React from "react";
import {View, Text, Image} from "react-native";

function Hello(props: any){
  return(
    <View>
      <Text>Hello, {props.name}</Text>
      <Image source={require("practiceMyApp/assets/images/home_icon.png")}
      />
    </View>
  );
};

Hello.defaultProps = {
  name: "World!"
};

export default Hello;