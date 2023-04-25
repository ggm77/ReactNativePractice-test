/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import { SafeAreaView } from "react-native";
import Hello from "./components/hello";

const App = () => {
  return(
    <SafeAreaView>
      <Hello name='aru'/>
    </SafeAreaView>
  );
};

export default App;