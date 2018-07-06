import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

const IndexScreen = ({ navigation }) => (
  <View style={styles.container}>
    {/* <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    /> */}
    <View style={styles["route-item"]}>
        <Text style={styles.RouteDate}>8月5日 星期六 后天</Text>
        <View style={styles["route-content"]}>
            <Text style={styles.conTitle}>汉庭酒店（北京常营店）</Text>
            <View style={styles.conDes}>
                <Text style={styles.desTxt}>入住时间：8月5日</Text>
                <Text style={styles.desTxt}>离店时间：8月6日</Text>
                <Text style={styles.desTxt}>常慧路4号199院</Text>
                <View style={styles.icon}>
                    <Image source={require("../assets/images/2x/icon-tel@2x.png")} />
                </View>
            </View>
        </View>
    </View>
    <View style={styles["route-item"]}>
        <Text style={styles.RouteDate}>8月5日 星期六 后天</Text>
        <View style={styles["route-content"]}>
            <Text style={styles.conTitle}>汉庭酒店（北京常营店）</Text>
            <View style={styles.conDes}>
                <Text style={styles.desTxt}>入住时间：8月5日</Text>
                <Text style={styles.desTxt}>离店时间：8月6日</Text>
                <Text style={styles.desTxt}>常慧路4号199院</Text>
                <View style={styles.icon}>
                    <Image source={require("../assets/images/2x/icon-tel@2x.png")} />
                </View>
            </View>
        </View>
    </View>
    <View style={styles["route-item"]}>
        <Text style={styles.RouteDate}>8月5日 星期六 后天</Text>
        <View style={[styles["route-content"], styles["route-fly-info"]]}>
            <View style={styles.title}><Text style={[styles.conTitle, styles.flyTitle]}>南方航空C4Z6412</Text></View>
            <View style={styles.conDes}>
                <View style={styles["route-info-con"]}>
                    <View>
                        <Text style={styles["rote-info-address"]}>北京</Text>
                        <Text style={styles["rote-info-airport"]}>首都机场T2</Text>
                        <Text style={styles["rote-info-airport"]}>06:25</Text>
                        <Text style={styles["rote-info-airport"]}>2017-08-08</Text>
                    </View>
                    <View></View>
                    <View>
                        <Text style={styles["rote-info-address"]}>上海</Text>
                        <Text style={styles["rote-info-airport"]}>虹桥机场T2</Text>
                        <Text style={styles["rote-info-airport"]}>08:40</Text>
                        <Text style={styles["rote-info-airport"]}>2017-08-08</Text>
                    </View>
                </View>
                <View style={[styles.icon, styles.fly]}>
                    <Image source={require("../assets/images/2x/icon-book@2x.png")} />
                    <Image source={require("../assets/images/2x/icon-state@2x.png")} />
                </View>
            </View>
        </View>
    </View>
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const Route = StackNavigator({
  Index: {
    screen: IndexScreen,
    navigationOptions: {
      headerTitle: '行程',
      headerStyle: {backgroundColor: "#40c0c8"},
      headerTintColor:  "#fff",
      headerBackTitleStyle: {color: "#fff"},
      headerLeft: <View><Text style={{color: "#fff"}}>返回</Text></View>,
      headerRight: <View><Text>…</Text></View>,
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default Route;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: "#f3f3f3"
    },
    "route-item": {
        flex: 3,
    },
    "route-content": {
        margin: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderRadius: 4
    },
    RouteDate: {
        color: "#46c6c2",
        fontSize: 14,
        marginLeft: 15
    },
    conTitle: {
        color: "#333",
        fontSize: 16,
        paddingLeft: 15,
        width: "100%",
        fontWeight: "bold"
    },
    conDes: {

    },
    desTxt: {
        color: "#999999",
        fontSize: 12,
        marginTop: 3,
        paddingLeft: 15
    },
    icon:{
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        alignItems: "center",
        width: "100%",
        marginTop: 8,
        paddingTop: 6
    },
    fly: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        paddingBottom: 4
    },
    "route-fly-info": {
        backgroundColor: "#53dec9",
        paddingBottom:0
    },
    title: {
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        paddingBottom: 4,
        marginBottom: 10
    },
    flyTitle: {
        color: "#fff",
        borderTopColor: "#333",
    },
    desFlyTxt: {
        color: "#fff"
    },
    "route-info-con": {
        flexDirection: "row"
    }
});