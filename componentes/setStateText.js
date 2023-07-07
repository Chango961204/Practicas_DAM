import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const ComponenteTexto = () => {
  const [titulo, setTitulo] = useState("ITZ");
  const texto = "Hola mundo";

  // Función
  const PresionarTitulo = () => {
    setTitulo("Has presionado un botón");
  };

  return (
    <Text style={styles.basetexto}>
          {'\n'}
          {'\n'}
          {'\n'}
          
      <Text style={styles.tituloTexto} onPress={PresionarTitulo}>
        {titulo}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{texto}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  tituloTexto: {
    fontSize: 20,
    fontFamily: "arial",
  },
  basetexto: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default ComponenteTexto;
