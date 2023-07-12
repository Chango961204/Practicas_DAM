import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const App = () => {
  const [habilitado, setHabilitado] = useState(false);
  const [textoHabilitado, setTextoHabilitado] = useState("Inactivo");

  const cambiarTexto = () => {
    setHabilitado((previousState) => !previousState);
    if (textoHabilitado === "Inactivo") {
      setTextoHabilitado("Activo");
    } else {
      setTextoHabilitado("Inactivo");
    }
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={habilitado ? "#f5d4b" : "#f34f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={cambiarTexto}
        value={habilitado}
      />
      <Text style={styles.texto}>Estado: {textoHabilitado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default App;
