import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        //backgroundColor: "blue", 
        height: 250, 
        width: "100%",
        paddingHorizontal: 10,
    },
    half: {
        flex: 1, // 50% of container height since there are two
        flexDirection: 'row',
    },
    quarter: {
        flex: 1, 
        //backgroundColor: 'whitesmoke',
        margin: 2, 
    },
    quarter2: {
        flex: 1, 
        //backgroundColor: 'whitesmoke',
        margin: 2, 
        paddingLeft: 60,
    },
    quarter3: {
        flex: 1, 
        //backgroundColor: 'whitesmoke',
        margin: 2, 
        paddingRight: 70,
        paddingTop: 20,
    },
    quarter4: {
        flex: 1, 
        //backgroundColor: 'whitesmoke',
        margin: 2, 
        justifyContent: "flex-end"
    },

    haciendaIcon: {
        width: 130,         
        height: 120,         
        borderRadius: 30,    
        resizeMode: 'cover', 
    },

    infoContainer: {
        //backgroundColor: "gray",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    infoLabel: {
        fontSize: 18,
        marginBottom: 10,
    },
    infoValue: {
        fontSize: 18,
    },
    

    printBtn: {
        backgroundColor: "#2388FF",
        height: 65,
        width: 180,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        flexDirection: "row",
    },
    printIcon: {
        transform: [{scaleX: 0.7}, {scaleY: 0.7}],
        marginRight: 10,
    },
    printBtnText: {
        color: "white",
        fontSize: 28,
    },
});

export default styles;