import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "row",
    },
    modalContainer: {
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 10,
      borderRadius: 10,
      width: '60%',
      height: "90%",
    },
    scrollContainer: {
      flexGrow: 1,
      alignItems: "center",
    },
    closeBtn: {
      alignSelf: "flex-start",
      marginTop: 40,
      marginLeft: 25,
    },
    closeBtnText: {
      color: "whitesmoke",
      transform: [{scaleX:2.5}, {scaleY:2}],
    },
  });

export default styles;
