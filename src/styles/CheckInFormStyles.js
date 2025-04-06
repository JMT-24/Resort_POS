import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '85%',
        height: "90%",
      },
    topPart: {
        //backgroundColor: "blue",
        height: '15%',
    },
    navBar: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    tabButton: {
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    tabText: {
        fontSize: 16,
        color: "#888",
    },
    activeTabText: {
        color: "black",
        fontWeight: "bold",
    },
    underlineContainer: {
        position: "relative",
        height: 2,
        backgroundColor: "transparent",
    },
    underline: {
        position: "absolute",
        width: "16%",
        height: 2,
        backgroundColor: "black",
        bottom: 0,
        transition: "left 0.3s ease-in-out", // Smooth transition
    },


    middlePart: {
        //backgroundColor: "gray",
        height: '65%',
        flexDirection: "row",  
        alignItems: "center",
        padding: 20,
    },
    middleLeft: {
        //backgroundColor: "whitesmoke",
        width: '40%',
        height: '100%',
    },
    middleLeftHeader: {
        fontWeight: 'bold',
        fontSize: 19,
    },
    middleLeftText: {
        fontSize: 13,
    },



    middleRight: {
        width: '60%',
        height: '100%',
        //backgroundColor: "violet",
        paddingRight: 50,
    },
      formBox: {
        gap: 15,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      halfWidth: {
        width: '48%',
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
        backgroundColor: '#fff',
      },
    //   saveButton: {
    //     marginTop: 10,
    //     backgroundColor: '#FF9F7F',
    //     paddingVertical: 12,
    //     borderRadius: 5,
    //     alignItems: 'center',
    //     width: 150,
    //     alignSelf: "flex-end"
    //   },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
      },


    bottomPart: {
        backgroundColor: "orange",
        height: '20%',
    },


});

export default styles