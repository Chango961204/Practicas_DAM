import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const Cancion = { uri: 'https://open.spotify.com/track/1n5knrhh6RZ70VbUnBPGJ7?si=F_i4FYiSRh27qZ_KrvVudQ' };

export default function App() {
    const [lista, setLista] = useState(false);
    const [cargando, setLoading] = useState(false);
    const sound = useRef(new Audio.Sound());

    useEffect(() => {
        cargar();
    }, []);

    const reproducirAudio = async () => {
        try {
            const resultado = await sound.current.getStatusAsync();
            if (resultado.isPlaying === false) {
                await sound.current.playAsync();
            }
        } catch (error) {
            console.log('Se encontró un error:', error);
        }
    };

    const pausar = async () => {
        try {
            const resultado = await sound.current.getStatusAsync();
            if (resultado.isPlaying === true) {
                await sound.current.pauseAsync();
            }
        } catch (error) {
            console.log('Se encontró un error:', error);
        }
    };

    const cargar = async () => {
        setLoading(true);
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false) {
            try {
                await sound.current.loadAsync(Cancion, {}, true);
                const resultado = await sound.current.getStatusAsync();
                if (resultado.isLoaded === false) {
                    setLoading(false);
                    console.log('Error al cargar el archivo de audio');
                } else {
                    setLoading(false);
                    setLista(true);
                }
            } catch (error) {
                console.log('Se encontró un error:', error);
                setLoading(false);
            }
        } else {
            setLoading(false);
            setLista(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.reproductor_audio}>
                {cargando ? (
                    <ActivityIndicator color={'red'} size={'small'} />
                ) : (
                    <>
                        {lista === false ? (
                            <>
                                <ActivityIndicator color={'green'} size={'small'} />
                                <Text>Cargando canción...</Text>
                            </>
                        ) : (
                            <>
                                <Button title="Reproducir" onPress={reproducirAudio} />
                                <Button title="Pausar" onPress={pausar} />
                            </>
                        )}
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: '#F5F5F5',
        paddingTop: Constants.statusBarHeight,
    },
    reproductor_audio: {
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
});
