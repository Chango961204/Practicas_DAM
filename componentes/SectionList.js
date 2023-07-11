import React from "react";
import { Text,StyleSheet,View,SafeAreaView,SectionList,StatusBar } from "react-native";

const DATA=[
    {
        nombre:'Autos',
        data:['Jetta','march','versa','chevy'],
    },
    {
        nombre:'Motocicletas',
        data:['italica','honda','yamaha'],
    },
    {
        nombre:'colores',
        data:['blanco','azul','verde'],
    }
];

const ListaApp = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <SectionList 
            sections={DATA}
            keyExtractor={(item,index )=> item+index}
            renderItem={({item})=> (

                <View style={styles.item}>
                    <Text style={styles.titulo}>{item}</Text>
                </View>
            )}
                renderSectionHeader={({section: {nombre} })=> (
                    <Text style={styles.header}>{nombre}</Text>
                )}
            
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:StatusBar.currentHeight,
    },
    item:{
        backgroundColor: "#f9c2ff",
        padding:20,
        marginVertical: 8,
    },
    header:{
        fontSize:32,
        backgroundColor: "#fff",
    },
    titulo:{
        fontSize:24,
    }
})

export default ListaApp;