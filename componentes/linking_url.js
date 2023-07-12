import React, { useState, useEffect } from 'react';
import { Alert, Button, Linking, StyleSheet, View } from 'react-native';

const useInitialURL = () => {
    const [urel, setUrl] = useState(null);
    const [proccesing, setProccesing] = useState(true);

    useEffect(() => {
        const getUrlAsync = async () => {
            const initiaUrl = await Linking.getInitialURL();

            setTimeout(() => {
                setUrl(initiaUrl);
                setProccesing(false);
            }, 1000);
        };
        getUrlAsync();
    }, []);
    return { URL, proccesing }
};

const App = () =>{
    const{URL:initialUrl,proccesing}=useInitialURL();
    return (
        <View style={styles.container}>
          <Text>
            {processing
              ? "Procesando la URL inicial desde un enlace profundo"
              : `El enlace es: ${initialUrl || "ninguno"}`}
          </Text>
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