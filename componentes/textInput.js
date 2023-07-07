import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const ejemploTextInput = () => {
  const [valor, setValor] = useState('Hola mundo');

  return (
    <View>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => setValor(text)}
        value={valor}
        style={{ padding: 10 }}
      />
    </View>
  );
};

export default ejemploTextInput;
