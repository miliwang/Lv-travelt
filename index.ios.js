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
import Home from "./src/Home"
import TabNavigator from "react-native-tab-navigator";

export default class rn0525 extends Component {
  constructor(props){
    super(props);
    this.state.selectedTab ="Home";
  }
  render() {
    return (
      <View>
        <Home />
        <TabNavigator>
          <TabNavigator.Item 
            selected={this.state.selectedTab === "Home"}
            title="首页"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => 
              // <Image style={styles.icon} source={require(".src/assets/images/tabbar_home.png")} />
              <Image style={styles.icon}/>
            }
            renderSelectedIcon={() => 
            // <Image style={styles.icon} source={require(".src/assets/images/tabbar-home-selected.png")}/>
            <Image style={styles.icon}/>
            }
            onPress={() => 
              this.setState({
                selectedTab: 'Home'
              })
            }
          >
          <View>
            <Home />
          </View>
          </TabNavigator.Item>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rn0525', () => rn0525);
