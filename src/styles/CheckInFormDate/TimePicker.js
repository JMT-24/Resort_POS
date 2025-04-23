import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headersubText: {
        fontSize: 20,
        color: "gray",
    },
    
    bottomView: {
        //backgroundColor: "blue",
        height: 400,
        width: "100%",
        marginTop: 50,
    },
    bottTopView: {
        //backgroundColor: "gray",
        width: "100%",
        height: "20%",
        display: "flex",
        flexDirection: "row"
    },
    hourToggleView: {
        //backgroundColor: "violet",
        width:"12%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    hourTogglebtn: {
        transform: [{ scaleX: 2.3 }, { scaleY: 2.3 }], 
    },


    hourHeaderView: {
        //backgroundColor: "pink",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        flexDirection: "column"
    },
    bottBottView: {
        //backgroundColor: "yellow",
        width: "100%",
        height: "65%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingLeft: 20,
        paddingTop: 30,
    },
    TimePickerView: {
        //backgroundColor: "gray",
        width: "90%",
        height: 130,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 80,
    },
    timePickerStyle: {
        width: "44%",
        height: 80,
        borderRadius: 20,
        paddingLeft: 25,
        justifyContent: "center",
        fontSize: 27,
        fontWeight: "bold",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: .5,
        borderColor: "gray",
    },
    timePickerText: {
        fontSize: 27,
        fontWeight: "bold",
    },
    dropdownArrow: {
        transform: [{scaleX: .7},{scaleY: .6}],
        marginRight: 20,
        opacity: 0.5,
    },  


    TimePickerManualView: {
        //backgroundColor: "gray",
        width: "90%",
        height: 130,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    arrowLeft: {
        transform: [{ scaleX: .6 }, { scaleY: .6 }], 
    },


});

export default styles