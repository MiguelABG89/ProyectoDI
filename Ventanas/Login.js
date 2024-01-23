import React from "react";
import { SafeAreaView, Text, Button, TextInput, Alert } from "react-native";
import styles from '../estilos/estilos'

function Login({ navigation }) {
    const [Usu, onChangeUsu] = React.useState('');
    const [pwd, onChangePwd] = React.useState('');

    return (
        <SafeAreaView style={styles.estructure}>
            <TextInput
                style={styles.inputs}
                onChangeText={onChangeUsu}
                value={Usu}
                placeholder = "Usuario"
            />
            <TextInput
                style={styles.inputs}
                onChangeText={onChangePwd}
                value={pwd}
                placeholder="Contraseña"
            
            />
            <Text onPress={() => navigation.navigate('RecuperarContrasena', { name: 'RecuperarContrasena' })}>
                He olvidado mi contraseña
            </Text>


            <Button title="iniciar sesion" onPress={() => Alert.alert('Navegación --> Pagina de inicio')} />

            <Text>¿Necesitas una cuenta?</Text>

            <Text style={styles.linkableText} onPress={() => navigation.navigate('Register', { name: 'Register' })}>Registrar</Text>
            
            {/**Tienes que buscar como hacer el estilo del Registrar */}

        </SafeAreaView>
    );
}

export default Login;