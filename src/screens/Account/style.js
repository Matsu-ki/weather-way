import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#292a4c"
    },

    alert: {
        fontSize: 18,
        textAlign: "center",
        color: "#F60",
        marginBottom: 20
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '190%',
        height: '180%',
      },

    formInput: {
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: "#DDD",
        padding: 20,
        marginBottom: 20,
        width: "100%"
    },

    formBtn: {
        backgroundColor: "#F20",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: "100%"
    },

    textBtn: {
        color: "#FFF",
        fontSize: 24,
        textAlign: "center"
    },
});

export default styles