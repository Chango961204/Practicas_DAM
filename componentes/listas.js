import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from "react-native";

const Datos = [
  { id: 1, nombre: 'luis' },
  { id: 2, nombre: 'viri :)' },
  { id: 3, nombre: 'fang' },
  { id: 4, nombre: 'mix' }
];

const Item = ({ nombre }) => (
  <View style={styles.item}>
    <Text style={styles.texto}>{nombre}</Text>
  </View>
);

const Lista = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Datos}
        renderItem={({ item }) => <Item nombre={item.nombre} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  texto: {
    fontSize: 32
  }
});

export default Lista;
