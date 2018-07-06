/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";

import TabNavigatorData from "./src/assets/json/tabNavigator.json";
import Home from "./src/Home";
import Route from "./src/Route";
import TailorMade from "./src/TailorMade";
import Travels from "./src/Travels";
import Mine from "./src/Mine";
export default class rn0525 extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: "行程"
    };
  }
  _renderTabarItems(selectedTab,icon,selectedIcon,Component){
    return (
      <TabNavigator.Item
          selected={this.state.selectedTab === selectedTab}  
          title={selectedTab} 
          titleStyle={styles.tabText}  
          selectedTitleStyle={styles.selectedTabText}  
          renderIcon={() => <Image source={icon} />}  
          renderSelectedIcon={() => <Image source={selectedIcon} />}  
          onPress={() => this.setState({ selectedTab: selectedTab })}
      >
          <Component />
      </TabNavigator.Item>
  )}
  _getTabIcon(id){
    let tabObj = {};
    let icon = null;
    switch(id){
      case 1:
        icon = require("./src/assets/images/2x/tab-home@2x.png");
        tabObj = {
          icon : icon,
          selected: require("./src/assets/images/2x/tab-home-selected@2x.png"),
          page: Home
        }
        break;
      case 2:
        icon = require("./src/assets/images/2x/tab-route@2x.png");
        tabObj = {
          icon : icon,
          selected: require("./src/assets/images/2x/tab-route-selected@2x.png"),
          page: Route
        }
        break;
      case 3:
        icon = require("./src/assets/images/2x/tab-tailor-made@2x.png");
        tabObj = {
          icon : icon,
          selected: require("./src/assets/images/2x/tab-tailor-made-sel@2x.png"),
          page: TailorMade
        }
        break;
      case 4:
        icon = require("./src/assets/images/2x/tab-travels@2x.png");
        tabObj = {
          icon : icon,
          selected: require("./src/assets/images/2x/tab-travels-selected@2x.png"),
          page: Travels
        }
        break;
      case 5:
        icon = require("./src/assets/images/2x/tab-mine@2x.png");
        tabObj = {
          icon : icon,
          selected: require("./src/assets/images/2x/tab-mine-selected@2x.png"),
          page: Mine
        }
        break;
    }
    return tabObj;
  };
  render() {
    let tabList = TabNavigatorData.result;
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={styles.tabnav}>
          {this._renderTabarItems('首页',this._getTabIcon(1).icon,this._getTabIcon(1).selected, Home)}
          {this._renderTabarItems('行程',this._getTabIcon(2).icon,this._getTabIcon(2).selected, this._getTabIcon(2).page)}
          {this._renderTabarItems('定制',this._getTabIcon(3).icon,this._getTabIcon(3).selected, this._getTabIcon(3).page)}
          {this._renderTabarItems('游记',this._getTabIcon(4).icon,this._getTabIcon(4).selected, this._getTabIcon(4).page)}
          {this._renderTabarItems('我的',this._getTabIcon(5).icon,this._getTabIcon(5).selected, this._getTabIcon(5).page)}
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabnav: {
    backgroundColor:"#3A3B3B"
  },
  tabText: {
    color: "#fff",
  },
  selectedTabText: {
    color: "#fff"
  }
});

AppRegistry.registerComponent('rn0525', () => rn0525);
