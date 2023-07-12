import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';


export default function Mapas() {
    const default_coor = {
        "coords": {
            "acuracy": 36.9000,
            "sltitude": 2292.9775,
            "altitudeAccuracy": 3,
            "heading": 0,
            "latitude": 22.7275401,
            "longitude": -102.5219093,
            "speed": 0,


        }
    };
    const [location, setLocation] = useState({});
    const [coordenadas, setCordenadas] = useState(default_coor);
    const buscarLocalizacion = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== "granted") {
            return Alert.alert("no hay permisos para la geolocalizacion");
        }
        const location = await Location.getCurrentPositionAsync({})
        setLocation(location);
    }
    useEffect(() => {
        buscarLocalizacion();
        //despues de renderizar el contenido ejecuta la funcion useEffect automaticamente
    }, []);
    return (
        <View style={styles.container}> 
            <View style={styles.columnas}>
                <Text>mapa</Text>
            </View>
            <View style={styles.columnas}>
                <MapView mapType={'hybrid'} style={styles.map} >
                    {
                        location.coords ?
                        <Marker coordinate={location.coords}
                        title='mi ubucacion actual'
                        description='aqui estoy'
                         />
                         :
                         null
                
                    }
                </MapView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'#cdc'

    },
    columnas:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
    },
    map:{
        width:Dimensions.get('window').width -50,
        height: Dimensions.get('window').height -300,
    }
})