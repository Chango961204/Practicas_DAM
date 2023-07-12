import { Text, View, Button, ScrollView, StyleSheet, StatusBar, SectionList } from 'react-native';
import Mapas from './src/mapas/mapas';
export default function App() {
  return (
    <View style={styles.container}>

      <Mapas  />
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