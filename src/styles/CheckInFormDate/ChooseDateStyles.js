import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        height: '90%',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    scrollContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        //paddingRight: 120,
    },

    
    topView: {
        //backgroundColor: "pink",
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    headerView: {
        //backgroundColor: "green",
        height: "100%",
        width: "95%",
        display: "flex",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headersubText: {
        fontSize: 20,
        color: "gray",
    },

    exitbtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "5%",
    },
    exitbtnText: {
        fontSize: 30,
    },



    middleView: {
        //backgroundColor: "yellow",
        height: 500,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    calendarBox: {
        width: "100%",
        height: "95%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
    },









    bottomView: {
        //backgroundColor: "blue",
        height: 450,
        width: "100%",
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
        backgroundColor: "yellow",
        width: "100%",
        height: "80%"
    },










    buttonView: {
        //backgroundColor: "pink",
        height: 120,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    cancelbtn: {
        height: 70,
        width: 180,
        backgroundColor: "#FF6666",
        marginRight: 50,
        borderRadius: 20,
        justifyContent: "center",
    },
    applybtn: {
        height: 70,
        width: 180,
        backgroundColor: "#2388FF",
        borderRadius: 20,
        justifyContent: "center",
    },
    btnText: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        color: "white",
    },

});

export default styles