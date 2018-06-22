import React, { Component } from "react";
import {View, Text} from "react-native";
import styles from "../assets/style/home";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>首页</Text>
      </View>
    );
  }
}