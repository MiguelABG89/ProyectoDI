import React from "react";
import RecuperarContrasena from "./pantallas/recuperarContrasena";
import styles from './estilos/estilos'
import { View } from "react-native";

export default function App() {

  return (
    <View style = {styles.container}>
      <RecuperarContrasena />
    </View>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-around",
//     backgroundColor: "lavender",
//     ...Platform.select({
//       ios: { paddingTop: 20 },
//       android: { paddingTop: StatusBar.currentHeight }
//     })
//   },

//   box: {
//     width: 300,
//     height: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//     borderWidth: 1,
//     borderStyle: "dashed",
//     borderColor: "pink"
//   },
//   boxText: {
//     color: "violet",
//     fontWeight: "bold"
//   }
// });
