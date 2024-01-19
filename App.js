import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Ventanas/Login";
import Registrar from './Ventanas/Registrar';

const Stack = createNativeStackNavigator();

function App(){
  return( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{title:'hola'}}
        ></Stack.Screen>
        <Stack.Screen name='Registar' component={Registrar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
