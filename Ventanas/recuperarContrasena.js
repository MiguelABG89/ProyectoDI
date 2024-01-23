import React from "react";
import { Button, View, TextInput, TouchableOpacity, Alert, Text } from "react-native";
import styles from '../estilos/estilos'

const RecuperarContrasena = () => {
    const [text, onChangeText] = React.useState('');

    const handleBackPress = () => {
        // Lógica para manejar el botón de flecha hacia atrás
        // Puedes utilizar la navegación, por ejemplo, si estás en una pantalla de navegación.

        Alert.alert('Se ha pulsado el botón FLECHA');
        

    };


    return (

        // TODO boton flotante navegación <--

        <View testID="RecuperarContrasena-screen">

            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                <Icon name="arrow-back" size={30} color="#ec5f28" />
            </TouchableOpacity>


            <Text style={styles.titles}>
                Restablecer la contraseña
            </Text>

            <Text style={styles.text}>
                Por favor, introduzca su dirección de correo. Le enviaremos las instrucciones para restablecer su contraseña.
            </Text>

            <TextInput
                style={styles.inputs}
                onChangeText={onChangeText}
                value={text}
            />

            <Button
                color='#ec5f28'
                title="Recuperar contraseña"
                onPress={() => {
                    Alert.alert('Se ha enviado un correo a la siguiente dirección:', `${text}`);
                }}
            />
        </View>

    );
};

export default RecuperarContrasena;