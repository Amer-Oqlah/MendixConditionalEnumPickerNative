import { Component, createElement } from "react";
import { Text, View } from "react-native";



const defaultStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

export class HelloWorld extends Component {
 

    render() {
        return (
            <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Text>Hello, world!</Text>
          </View>
        );
    }
}
