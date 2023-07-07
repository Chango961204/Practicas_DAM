import { Text, View, Button, ScrollView, StyleSheet, StatusBar} from 'react-native';
import Texto from './componentes/setStateText';
import Imagenes  from './componentes/imagenes'
import Lista from './componentes/listas';
import Scroll from './componentes/scrollView';
import ListaBotonoes from './componentes/listaBotonoes';
import TextInput  from './componentes/textInput';
import Boton from './componentes/boton';
import ListasTouch from './componentes/listasTouch';


export default function App(){
  return(
    <View>
      <ScrollView style ={styles.scrollView}>
        <Texto></Texto>
        <Text>hola mundo desde componente</Text>
     
        <Imagenes></Imagenes>
        <TextInput></TextInput>
        <ListaBotonoes />
        <Lista />
        <ListasTouch />
        
      </ScrollView>
    </View>
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