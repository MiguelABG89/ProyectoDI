import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Ventanas/Login";
import Register from './Ventanas/Register';
import RecuperarContrasena from "./Ventanas/recuperarContrasena";


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