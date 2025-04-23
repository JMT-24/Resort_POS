import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    TableContainer: {
        marginTop: 40,
        //backgroundColor: "gray",
        height: 700,
        width: "100%",
    },
    table: {
        borderWidth: 1,
        borderColor: '#ccc',
    },
    row: {
        flexDirection: 'row',
    },
    headerRow: {
        backgroundColor: '#F2F2F2',
    },
    headerText: {
        fontWeight: 'bold',
    },
    cell: {
        flex: .5,
        padding: 10,
        textAlign: 'center',
        fontSize: 17,
    },
    cell2: {
        width: 350,
        padding: 10,
        textAlign: 'left',
        paddingLeft: 50,
        fontSize: 17,
        //backgroundColor: "red",
    },
    footerContainer: {
        marginTop: 30,
        height: 100,
        //backgroundColor: "gray",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    half: {
        //backgroundColor: "red",
        width: 330,
        paddingRight: 10,
    },
    footerHeader: {
        fontSize: 21,
    },
    footerNotesContainer: {
        height: 70,
        //backgroundColor: "whitesmoke",
        flexDirection: "column",
    },
    NotesText: {
        fontSize: 17,
    },
    footerView: {
        //backgroundColor: "whitesmoke",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footerText: {
        fontSize: 20,
    },
});

export default styles;