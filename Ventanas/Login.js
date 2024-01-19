import React from "react";
import { SafeAreaView,Text, Button, StyleSheet, TextInput, Alert } from "react-native";

function Login({ navigation }) {
    const [Usu, onChangeUsu] = React.useState('');
    const [pwd, onChangePwd] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUsu}
                value={Usu}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePwd}
                value={pwd}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            <Text onPress={() => navigation.navigate('Registar', { name: 'Registar' })}>He olvidado mi contraseña</Text> 
            <Button title="iniciar sesion" onPress={()=>Alert.alert('Pagina de inicio')}></Button>
            <Text>¿Necesitas una cuenta?</Text>
           <Text style={{color:'blue'}} onPress={() => navigation.navigate('Register', { name: 'Register' })}>Registrar</Text> 
           {/**Tienes que buscar como hacer el estilo del Registrar */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Login;