import React, { useCallback } from 'react';
import { Alert, Button, Linking, StyleSheet, View } from 'react-native';

const AbrirAjustesBoton = ({ hijo }) => {
    console.log(hijo);
    const handlePress = useCallback(async () => {
        await Linking.openSettings();
    }, []);
    return <Button title={'abrir configuracion'} onPress={handlePress} />
};

const App = () => {
    return (
        <View style={styles.container}>
            <AbrirAjustesBoton> Abrir Ajustes </AbrirAjustesBoton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;