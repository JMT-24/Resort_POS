import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '60%',
      height: "90%",
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
    },
    headerContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    headerLeft: {
      flex: 1,
    },
    headerRight: {
      alignItems: 'flex-end',
    },
    label: {
      fontWeight: 'bold',
    },
    value: {
      fontSize: 14,
    },
    infoGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '48%',
      marginBottom: 5,
    },
    printButton: {
      alignSelf: 'flex-end',
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    printText: {
      fontWeight: 'bold',
    },
    tableContainer: {
      borderWidth: 1,
      borderColor: '#000',
      marginBottom: 10,
    },
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: '#ddd',
      padding: 5,
    },
    tableRow: {
      flexDirection: 'row',
      padding: 5,
    },
    columnHeader: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    tableCell: {
      flex: 1,
      textAlign: 'center',
    },
    summaryContainer: {
      alignSelf: 'flex-end',
      width: '50%',
      borderWidth: 1,
      borderColor: '#000',
      padding: 5,
      marginTop: 10,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10,
    },
    closeText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default styles;
