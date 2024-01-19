import React from "react";
import { SafeAreaView,Button,StyleSheet,TextInput, Alert } from "react-native";

function Registrar({ navigation }) {
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
            <Button title="iniciar sesion" onPress={()=>Alert.alert('boton pulsado')}></Button>
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

export default Registrar;