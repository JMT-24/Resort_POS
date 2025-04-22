import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "blue", 
        height: 300, 
        width: "100%",
    },
    half: {
        flex: 1, // 50% of container height since there are two
        flexDirection: 'row',
    },
    quarter: {
        flex: 1, 
        backgroundColor: 'white',
        margin: 2, 
    },

    haciendaIcon: {
        width: 120,         
        height: 120,         
        borderRadius: 30,    
        resizeMode: 'cover', 
    },
});

export default styles;