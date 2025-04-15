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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-evenly",
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },

    cottageView: {
        //backgroundColor: "yellow",
        width: "100%",
        height: 450,
    },
    headerView: {
        //backgroundColor: "green",
        height: 100,
        display: "flex",
        justifyContent: "center",
        paddingLeft: 30,
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headersubText: {
        fontSize: 20,
        color: "gray",
    },

    cottageGridView: {
        //backgroundColor: "blue",
        width: "100%",
        height: 350,
    },

    
    cottagesGrid: { 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingLeft: 8,
        //backgroundColor: "#444",
        width: "100%",
        height: "100%",
    },

    cottageBox: { 
        width: 120, 
        height: 120, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 20, 
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
    },

    available: { 
        backgroundColor: "#FFFFFF",
        color: "black",
    },

    unavailable: { 
        backgroundColor: '#FFA0A0',
        color: '#fff',
    },

    cottageText: { 
        fontSize: 25,
        fontWeight: 'bold', 
    },

    
    buttonView: {
        //backgroundColor: "pink",
        height: 100,
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