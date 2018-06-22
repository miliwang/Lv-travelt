/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";

import TabNavigatorData from "./src/assets/json/tabnavData.json";
import Home from "./src/Home";
export default class rn0525 extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: "home"
    };
  }
  render() {
    let tabList = TabNavigatorData.result;
    function getTabIcon(id){
      let icon;
      switch(id){
        case 1:
          icon = require("./src/assets/images/2x/tab-home@2x.png");
          break;
        case 2:
          icon = require("./src/assets/images/2x/tab-route@2x.png");
          break;
        case 3:
          icon = require("./src/assets/images/2x/tab-crown@2x.png");
          break;
        case 4:
          icon = require("./src/assets/images/2x/tab-travels@2x.png");
          break;
        case 5:
          icon = require("./src/assets/images/2x/tab-mine@2x.png");
          break;
        case 6:
          icon = require("./src/assets/images/2x/tab-select-home@2x.png");
          break;
        case 7:
          // icon = require("./src/assets/images/2x/tab-select-route@2x.png");
          break;
        case 8:
          // icon = require("./src/assets/images/2x/tab-select-crown@2x.png");
          break;
        case 9:
          // icon = require("./src/assets/images/2x/tab-select-travels@2x.png");
          break;
        case 10:
          // icon = require("./src/assets/images/2x/tab-select-mine@2x.png");
          break;
      }
      return icon;
    };
    return (
      <View>
        <Home /> 
        <TabNavigator tabBarStyle={styles.tabnav}>
          {
            tabList.map((item) => {
              return (
                <TabNavigator.Item
                  key={item.id}
                   selected={this.state.selectedTab === item.selected} 
                  title={item.title}
                  titleStyle={styles.tabText}
                  selectedTitleStyle={styles.selectedTabText}
                  renderIcon={() => 
                    <Image source={getTabIcon(item.id)} />
                  }
                  renderSelectedIcon={() => 
                   <Image source={getTabIcon(item.id + 5)}/>  
                  }
                  onPress={() => 
                    this.setState({
                      selectedTab: item.selected
                    })
                  }
                >
                <View>
                  <Home />
                </View>
                </TabNavigator.Item>
              );
            })
          }
          
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabnav: {
    backgroundColor:"#3A3B3B"
  },
  tabText: {
    color: "#fff"
  },
  selectedTabText: {
    color: "#fff"
  }
});

AppRegistry.registerComponent('rn0525', () => rn0525);
