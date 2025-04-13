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
    },

    
    topView: {
        backgroundColor: "pink",
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    headerView: {
        backgroundColor: "green",
        height: "100%",
        width: "90%",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headersubText: {
        fontSize: 20,
    },

    exitbtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
    },
    exitbtnText: {
        fontSize: 30,
    },
    middleView: {
        backgroundColor: "yellow",
        height: 500,
        width: "100%",
    },
    bottomView: {
        backgroundColor: "blue",
        height: 400,
        width: "100%",
    },
    buttonView: {
        backgroundColor: "pink",
        height: 150,
        width: "100%",
    },
});

export default styles