import React from "react";
import { ScrollView, StatusBar, Text, StyleSheet, SafeAreaView } from 'react-native';

const scrollView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.texto}>
          Un dispositivo móvil se puede definir como un aparato de pequeño tamaño, 
          con algunas capacidades de procesamiento, 
          con conexión permanente o intermitente a una red, con memoria limitada, 
          que ha sido diseñado específicamente para una función, 
          pero que puede llevar a cabo otras funciones más generales.
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'blue',
    marginHorizontal: 40,
  },
  texto: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default scrollView;
