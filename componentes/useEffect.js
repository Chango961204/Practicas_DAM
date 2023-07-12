import React,{useEffect,useState} from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ButtonExample = () => {

    useEffect(()=>{
        alert('termino de renderizar el contenido y ejecuto el useEffect');
    })
  return (
    <View style={styles.container}>
      <Button
        title="Botón"
        color="#f194ff"
        onPress={() => alert('Has presionado un botón')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

export default ButtonExample;
