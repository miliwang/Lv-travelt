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
export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      searchTxt: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
         <ScrollView>
           <View style={styles.topBar}>
              <Image style={styles['top-bar-bg']} source={require("../assets/images/2x/top-bar@2x.png")} /> 
              <View style={styles['tob-bar-con']}>
                <Text style={styles['tob-bar-address']}>北京</Text>
                <View style={styles['top-bar-search-view']}>
                  <TextInput
                    autoCapitalize="none"
                    editable= {true}
                    placeholder="请输入内容"
                    placeholderTextColor="#fff"
                    value={this.state.searchTxt} 
                    style={styles.searchIpt}/>
                </View>
                <Text style={styles['tob-bar-address']}>取消</Text>
              </View> 
          </View>
          <View style={styles.banner}>
            <Image source={ require("../assets/images/2x/banner01@2x.png") } />
          </View>
          <View style={styles.nav}>
            <View style={[styles.navRow,styles.navRow1]}>
              <Image source={require("../assets/images/2x/nav-fly@2x.png")} />
              <View style={styles['nav-row-text-box']}>
                <Text style={[styles['nav-row-text'],{marginBottom: 4}]}>自由行</Text>
                <Text style={[styles['nav-row-text'],{marginBottom: 4,borderTopRightRadius: 5, overflow: "hidden"}]}>跟团游</Text>
                <Text style={[styles['nav-row-text'],{marginTop: 3}]}>自助游</Text> 
                <Text style={[styles['nav-row-text'],{marginTop: 3}]}>自助游</Text> 
              </View>
            </View>
            <View style={[styles.navRow,styles.navRow2]}>
              <Text style={[styles['nav-row-text'],{marginLeft: 0}]}>周边游</Text>
              <Text style={styles['nav-row-text']}>国内游</Text>
              <Text style={styles['nav-row-text']}>出境游</Text>
            </View>
            <View style={[styles.navRow,styles.navRow3]}>
              <Image source={require("../assets/images/2x/nav-hotel@2x.png")} />
              <View style={styles['nav-row-text-box']}>
                <Text style={[styles['nav-row-text'],styles.navBlue, {marginBottom: 4}]}>火车票</Text>
                <Text style={[styles['nav-row-text'],styles.navBlue,{ marginBottom: 4}]}>特价火车票</Text>
                <Text style={[styles['nav-row-text'],styles.navBlue,{marginTop: 3}]}>机票</Text> 
                <Text style={[styles['nav-row-text'],styles.navBlue,{marginTop: 3},{borderBottomRightRadius: 5, overflow: "hidden"}]}>特价机票</Text> 
              </View>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.conHeader}>
              <Image source={require("../assets/images/2x/address@2x.png")} />
              <Text style={styles["con-header-txt"]}>优质定制</Text>
            </View>
            <View style={styles.con01}>
              <View> 
                <Image source={require("../assets/images/2x/banner02@2x.png")} />
                <Text style={[styles.tip,{top: 17}]}>北京出发</Text>
                <Text style={[styles.tip,styles.tipCost]}>￥4179 预计花费</Text>
                <View style={styles.des}><Text>4天3晚，北京>西安>咸阳>华阴</Text></View>
              </View>
              <View style={styles.tipList}>
                <Text style={styles.tipTxt}>风土人情</Text>
                <Text style={styles.tipTxt}>名胜古迹</Text>
                <Text style={styles.tipTxt}>人文</Text>
                <Text style={styles.tipTxt}>爬山</Text>
              </View>
            </View>
            <View style={styles.con01}>
              <View> 
                <Image source={require("../assets/images/2x/banner03@2x.png")} />
                <Text style={[styles.tip,{top: 17}]}>北京出发</Text>
                <Text style={[styles.tip,styles.tipCost]}>￥4179 预计花费</Text>
                <View style={styles.des}><Text>4天3晚，北京>西安>咸阳>华阴</Text></View>
              </View>
              <View style={styles.tipList}>
                <Text style={styles.tipTxt}>风土人情</Text>
                <Text style={styles.tipTxt}>名胜古迹</Text>
                <Text style={styles.tipTxt}>人文</Text>
                <Text style={styles.tipTxt}>爬山</Text>
              </View>
            </View>
            <View style={styles.con01}>
              <View> 
                <Image source={require("../assets/images/2x/banner04@2x.png")} />
                <Text style={[styles.tip,{top: 17}]}>北京出发</Text>
                <Text style={[styles.tip,styles.tipCost]}>￥4179 预计花费</Text>
                <View style={styles.des}><Text>4天3晚，北京>西安>咸阳>华阴</Text></View>
              </View>
              <View style={styles.tipList}>
                <Text style={styles.tipTxt}>风土人情</Text>
                <Text style={styles.tipTxt}>名胜古迹</Text>
                <Text style={styles.tipTxt}>人文</Text>
                <Text style={styles.tipTxt}>爬山</Text>
              </View>
            </View>
          </View>
          </ScrollView>
      </View>
      
    );
  }
}
