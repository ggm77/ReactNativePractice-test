import React, {useState} from "react";
import {View, Text, Image, StyleSheet, Button, } from "react-native";

function pictureChoice(props: boolean){
    var p1 = require("practiceMyApp/assets/images/cat.gif");
    var p2 = require("practiceMyApp/assets/images/cat2.gif");

    return(props ? p1:p2);
}

function btn(){

    const [value, changeValue] = useState(true);

    return(
        <View>
            <Text>cute cat</Text>
            <Image 
                source = {pictureChoice(value)}
                style = {styles.mainImage}
            />

            <Button
                title = "Change Cat"
                onPress={() => {changeValue(!value);}}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainImage: {
        width: 500,
        height: 500,
    }
});

export default btn;


