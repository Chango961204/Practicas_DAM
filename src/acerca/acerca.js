import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

export default function App({navigation}){
    return(
        <View>
            <Text>hola mundo desde Acerca de...</Text>
            <Button title="Ir a Ajustes"
                onPress={() => {
                    navigation.navigate('Ajustes');

                }} />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        
    }
})