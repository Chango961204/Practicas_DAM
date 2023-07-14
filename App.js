import { Text, View, Button, ScrollView, StyleSheet, StatusBar, SectionList } from 'react-native';
import Audio from './src/audio/audio';
import TextoVoz from './src/audio/texto_voz';
import Camara from './src/camara/camara';
export default function App() {
  return (
    <View style={styles.container}>
      
      
      <Camara />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
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