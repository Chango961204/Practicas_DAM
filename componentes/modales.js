import React, { SetState, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";


const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.CentrarView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('el modal ha sido cerrado');
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.CentrarView}>
                    <View style={styles.VistaModal}>
                        <Text style={styles.modalTexto}>hola desde el modal</Text>
                        <Pressable

                            style={[styles.boton, styles.botonCierra]}>
                            <Text style={styles.texto}></Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.boton, styles.botonAbre]}
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <Text style={styles.texto}>mostrar modal</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    CentrarView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        matginTop: 22,
    },
    VistaModal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    boton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    botonAbre: {
        backgroundColor: '#F194FF',

    },
    botonCierra: {
        backgroundColor: '#2196f3'
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    modalTexto: {
        marginBottom: 15,
        textAlign: 'center',
    }
})

export default App;