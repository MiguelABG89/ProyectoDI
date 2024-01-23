import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Ventanas/Login";
import Register from './Ventanas/Register';
import RecuperarContrasena from "./pantallas/recuperarContrasena";
import styles from './estilos/estilos'
import { View } from "react-native";
import styles from './estilos/estilos'

const Stack = createNativeStackNavigator();

function App(){
  return( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={Login}
        ></Stack.Screen>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='RecuperarContrasena' component={RecuperarContrasena}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;



// export default function App() {

//   return (
//     <View style = {styles.container}>
//       <RecuperarContrasena />
//     </View>

//   );
// }

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
