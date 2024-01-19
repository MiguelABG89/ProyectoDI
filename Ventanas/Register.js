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
        <View>
            {/* LOGO AQUI */}

            <Text>{"\n"}Usuario: </Text>
            <TextInput style={styles.input} onChangeText={setUser} value={user} label="Usuario"/>

            {/* Boton para ocultar */}
            <Text>{"\n"}Contraseña: </Text>
            <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={true}/>
            <Text style={{color:'red'}}>{mensajePasswordInvalida}</Text>

            {/* Boton para ocultar */}
            <Text>{"\n"}Confirmar contraseña: </Text>
            <TextInput style={styles.input} onChangeText={setPassword2} value={password2} secureTextEntry={true}/>
            <Text style={{color:'red'}}>{mensajePasswordDiferentes}</Text>

            <Text>{"\n"}</Text>

            <Button
                onPress={() => {
                    {/* Se vacian los campos de mensajes */}
                    setMensajeCamposVacios('')
                    setMensajePasswordInvalida('')
                    setMensajePasswordDiferentes('')

                    {/* */}
                    if (user.trim() === '' || password.trim() === '' || password2.trim() === '') {
                        setMensajeCamposVacios('Uno o más campos estan vacios')
                    } else if (password.length < 6) {
                        setMensajePasswordInvalida('Longitud minima de la contraseña: 6 caracteres')
                    } else if (password !== password2) {
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
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Register