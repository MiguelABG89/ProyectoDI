import { StatusBar } from "react-native";

const styles = {

    inputs: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    text: {
        textAlign: "center",
        margin: 20,
    },


    titles: {
        padding: 30,
        fontSize: 30,
        textAlign: "center",
    },

    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "lavender",
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight }
        })
    },
};

export default styles;