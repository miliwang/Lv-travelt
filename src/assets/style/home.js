import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ececec",
        width: "100%",
        height: "100%",
        paddingTop: 20,
        flexDirection: "row"
    },
    topBar: {
        width: "100%",
        height: 50,
        position: "relative",
        flexDirection: "row",
        alignItems: "center"
    },
    "top-bar-bg": {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },
    "tob-bar-con": {
        width: "100%",
        flexDirection: "row",
        position: "absolute",
        // top: "50%",
        left: 0
    },
    "tob-bar-address": {
        color: "#fff",
        backgroundColor: "transparent",
        height: 28,
        lineHeight: 24,
        marginLeft: 16,
        marginRight: 16
    },
    "top-bar-search-view":{
        backgroundColor: "#3ea290",
        flex: 1,
        borderRadius: 20
    },
    "searchIpt":{
        height: 28,
        lineHeight: 28,
        width: "100%",
        fontSize: 14,
        paddingLeft: 10
    },
    banner:{
        width: "100%"
    },
    nav:{
       margin: 7,
    //    width: "100%"
    },
    navRow: {
        flexDirection: "row",

    },
    "nav-row-text-box":{
        flexDirection: "row",
        flexWrap: "wrap"
    },
    "nav-row-text": {
        width: 116,
        height: 34,
        lineHeight: 34,
        color: "#fff",
        backgroundColor: "#fb9f3d",
        marginLeft: 6,
        textAlign: "center"
    },
    navRow2: {
        marginTop: 2,
        marginBottom: 6
    },
    main:{
        width: "100%"
    },
    conHeader: {
        width: "100%",
        height: 29,
        flexDirection: "row",
        backgroundColor: "#11c088",
        paddingLeft: 10,
        alignItems: "center"
    },
    "con-header-txt":{
        color: "#fff",
        marginLeft: 5,
        textAlign:"justify"
    },
    con01: {
        width: "100%",
        position: "relative"
    },
    tip: {
        position: "absolute",
        color: "#fff",
        fontSize: 12,
        backgroundColor: "rgba(0,0,0,0.59)",
        left: 11,
        borderRadius: 7,
        overflow: "hidden",
        paddingHorizontal: 5,
        paddingVertical: 2
    },
    tipCost: {
        backgroundColor: "#fb9f3d",
        bottom: 42,
        paddingHorizontal: 7
    },
    des: {
        backgroundColor: "rgba(255,255,255,.64)",
        height: 26,
        alignContent: "center",
        paddingLeft: 12,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        justifyContent: "center"
    },
    tipList: {
        width: "100%",
        flexDirection: "row"
    },
    tipTxt: {
        backgroundColor: "#fb9f3d",
        borderRadius: 7,
        marginLeft: 12,
        fontSize: 12,
        color: "#fff",
        paddingVertical: 2,
        paddingHorizontal: 4,
        overflow: "hidden",
        marginTop: 5,
        marginBottom: 11
    }
});
module.exports = styles;