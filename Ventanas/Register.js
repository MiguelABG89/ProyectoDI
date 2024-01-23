import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

function Register() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [mensajeCamposVacios, setMensajeCamposVacios] = useState("")
    const [mensajePasswordInvalida, setMensajePasswordInvalida] = useState("")
    const [mensajePasswordDiferentes, setMensajePasswordDiferentes] = useState("")


    return (
        <View testID='Register-screen'>
            {/* LOGO AQUI */}
            <TextInput style={styles.input} onChangeText={setUser} value={user} placeholder="Usuario"/>
            <Text></Text>

            {/* Boton para ocultar */}
            <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={true} placeholder="Contraseña"/>
            <Text style={{color:'red'}}>{mensajePasswordInvalida}</Text>

            {/* Boton para ocultar */}
            <TextInput style={styles.input} onChangeText={setPassword2} value={password2} secureTextEntry={true} placeholder="Confirmar contraseña"/>
            <Text style={{color:'red'}}>{mensajePasswordDiferentes}</Text>

            <Button
                onPress={() => {
                    // Se vacian los campos de mensajes 
                    setMensajeCamposVacios('')
                    setMensajePasswordInvalida('')
                    setMensajePasswordDiferentes('')

                    //Comprobaciones
                    if (user.trim() === '' || password.trim() === '' || password2.trim() === '') {
                        // Ningun campo vacio
                        setMensajeCamposVacios('Uno o más campos estan vacios')
                    } else if (password.length < 6) {
                        // Contraseña valida
                        setMensajePasswordInvalida('Longitud minima de la contraseña: 6 caracteres')
                    } else if (password !== password2) {
                        // Confirmar contraseña correcto
                        setMensajePasswordDiferentes('Las contraseñas no son iguales');
                    } else {
                        Alert.alert('Registro correcto', 'El registro de usuario se ha realizado correctamente')
                    }
                }}
                title='Registrarse'
                color="#485124"
                accessibilityLabel='Registrarse'
            />
            <Text style={{color:'red'}}>{"\n"+mensajeCamposVacios}</Text>
        </View>
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

export default Register