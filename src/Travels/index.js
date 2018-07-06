import React, { Component } from "react";
import {
  View, 
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import { TabNavigator } from "react-navigation";
import styles from "../assets/style/home.js"
export default class Travels extends Component {
    constructor () {
        super();
        this.state = {
            searchTxt: ""
        }
    }

    render(){
        return(
            <View><Text>游记</Text></View>
        )
    };
}