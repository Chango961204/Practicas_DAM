import React, { startTransition, useState } from "react";
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {
    const [hidden, setHidden] = useState(false);
    const [StatusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [StatusBarTransition, setStatusBarTransition] = useState(TRANSITIONS);

    const changeStatusBarVisibility = () => setHidden(!hidden);
    const changeStatusBarStyle = () => {
        const styleID = STYLES.indexOf(StatusBarStyle)+1;
        if (styleID == STYLES.length) {
            setStatusBarStyle(STYLES[0]);
        } else {
            setStatusBarStyle(STYLES[styleID]);
        }
    }
    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(StatusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={StatusBarStyle}
                showHideTransition={setStatusBarTransition}
                hidden={hidden}
            />
            <Text style={styles.texStyle}>
                StatusBar Visibility:{'\n'}
                {hidden ? 'hidden' : 'visible'}
            </Text>
            <Text style={styles.texStyle}>
                StatusBar style:{'\n'}
                {StatusBarStyle}

            </Text>
            {Platform.OS === 'ios' ? (
                <Text>
                    StatusBar transition: {'\n'}
                    {StatusBarTransition}
                </Text>
            ) : null
            }
            <View>
                <Button title="Mostar StatusBar" onPress={changeStatusBarVisibility} />
                <Button title="cambiar el estilo de barra"
                    onPress={changeStatusBarStyle} />
                {Platform.OS === "ios" ? (
                    <Button title="cambiar transicion de la barra" onPress={changeStatusBarTransition} />
                ) : null
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
    },
    buttons: {
        padding: 10,

    },
    texto: {
        textAlign: 'center',
        marginBottom: 8
    },
})

export default App;