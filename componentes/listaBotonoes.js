import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';

const Separador = () => <View style={styles.separador} />;

const listaBotones = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titulo}>
          Este es un botón que al presionarlo lanza un mensaje
        </Text>
        <Button
          title='Presióname'
          onPress={() => alert("Este es un mensaje simple")}
        />
      </View>
      <Separador />
      <View>
        <Text style={styles.titulo}>
          Este es un ejemplo de un botón inactivo
        </Text>
        <Button title='Botón inactivo' disabled />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separador: {
    marginVertical: 8,
    borderColor: '#FE5F00',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default listaBotones;
