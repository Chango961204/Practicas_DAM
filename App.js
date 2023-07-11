import { Text, View, Button, ScrollView, StyleSheet, StatusBar, SectionList } from 'react-native';
import Texto from './componentes/setStateText';
import Imagenes from './componentes/imagenes'
import Lista from './componentes/listas';
import Scroll from './componentes/scrollView';
import ListaBotonoes from './componentes/listaBotonoes';
import TextInput from './componentes/textInput';
import Boton from './componentes/boton';
import ListasTouch from './componentes/listasTouch';
import SeccionListas from './componentes/SectionList';
import ComponenteDeActividad from './componentes/indicadorActividad';
import ImagenFondo from './componentes/imagenesFondo';
import VerTeclado from './componentes/verTeclado'
import Modal from './componentes/modales';
import Presionable from './componentes/presionable';
import Refresh from './componentes/refreshControl';
import Status_bar from './componentes/statusBar'
export default function App() {
  return (
    <View style={styles.container}>

      <Status_bar />

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