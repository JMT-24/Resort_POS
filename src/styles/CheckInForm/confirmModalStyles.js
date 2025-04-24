import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'rgba(99, 235, 94, 0.8)',
        height: "60%",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
    },
    confirmIcon: {
        transform: [{scaleX: .7},{ scaleY: .7}],
    },
    confirmText: {
        color: "white",
        fontSize: 40,
    },
})

export default styles;