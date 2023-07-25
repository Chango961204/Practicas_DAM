import React from "react";
import { View,StyleSheet,Button } from "react-native";
import * as Speech from 'expo-speech';

export default function App(){
    const voz = () =>{
        const palabra = 'chupame el pito ';
        tipos_voz = Speech.getAvailableVoicesAsync();
        console.log(tipos_voz);

        Speech.speak(palabra,{_voiceIndex:1,language:'spanish',pitch:1});

    };
    return(
        <View style={styles.container}>
            <Button title="Reproducir Voz" onPress={voz} />
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#ecf0f1',
        padding:8,
    },
})