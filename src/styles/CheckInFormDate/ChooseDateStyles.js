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
        transform: [{scaleX: 1.5}, {scaleY: 1}],
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