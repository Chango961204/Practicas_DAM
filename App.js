import React from 'react';
import { Text, View, Button, ScrollView, StyleSheet, StatusBar, SectionList,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from './src/inicio/inicio';
import Acerca from './src/acerca/acerca';
import Ajustes from './src/ajustes/ajustes';
import DetalleAvisos from './src/avisos/Detalle';

function LogoTitulo(){
  return(
    <Image>
      style={{width:50, height:50}}
      source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6Fvl2wN_FzAm-heXt2bJIbCcrIAbPe-_SA'}}
    </Image>
  );
}
//const Stack = createDrawerNavigator();
const Drawer = createDrawerNavigator();

function App({ navigation }) {
  const [textoAjustes, setTextoAjustes] = React.useState('hola mundo desde Ajustes ');
    //donde se envia el textoJustes a componente Ajustes
  return (
    <NavigationContainer>
      <Drawer.Navigator>
       <Drawer.Screen name="Inicio" component={Inicio}/>
       <Drawer.Screen name="Acerca" component={Acerca}/>
       <Drawer.Screen name="Ajustes" component={Ajustes}/>
       <Drawer.Screen name="DetalleAvisos" component={DetalleAvisos} />
      


       

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vista: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
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

export default App;