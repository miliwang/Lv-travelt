import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ececec",
        width: "100%",
        height: "100%",
        marginTop: 20,
        flexDirection: "row"
    },
    topBar: {
        width: "100%",
        height: 50,
        position: "relative",
        alignItems: "center",
        justifyContent:"center"
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
        top: 0,
        left: 0
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
    }
});
module.exports = styles;