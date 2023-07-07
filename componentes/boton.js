import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ButtonExample = () => {
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
