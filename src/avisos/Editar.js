import { Center, HStack, Heading, NativeBaseProvider, Spinner } from "native-base";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { set } from "react-native-reanimated";

export default function App(route, navigation) {
    const { id } = route = route.params;
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    //
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [url_imagen, setUrl_Imagen] = useState('');
    const [estado, setEstado] = useState('');

    const [error_nombre, setError_Nombre] = useState(null);
    const [error_descripcion, setError_Descripcion] = useState(null);
    const [error_Imagen, setError_Imagen] = useState(null);
    const [error_Estado, setError_Estado] = useState(null);

    const estado_list = ['ACTIVO', 'INACTIVO'];


    async function ValidarAviso() {

        if (nombre == null || nombre == '') {
            setError_Nombre('El nombre es obligatorio');
        } else {
            setError_Nombre('');
            if (descripcion == null || descripcion == '') {
                setError_Descripcion('La descripción es obligatoria');
            } else {
                setError_Descripcion('');
                if (url_imagen == null || url_imagen == '') {
                    setError_Imagen('La url de la imagen es obligatoria');
                } else {
                    setError_Imagen('');
                    if (estado == null || estado == '') {
                        setError_Estado('El estado es obligatorio');
                    } else {
                        setError_Estado('');
                        //ya se realizaron todas las validaciones
                        //enviar la peticion post para guardar los datos
                        guardarAviso();
                    }
                }
            } //fin de descrpcion
        }
    }
    const traerdatos = async (id_aux) => {
        const data = { id: id_aux };
        const response = await fetch(uri + 'mostrar_aviso', {
            params: data
        });

        const result = await response.data;
        setDatos(result);
        setCargando(false);
    }
    async function ActualizarAviso() {

        if (nombre == null || nombre == '') {
            setError_Nombre('El nombre es obligatorio');
        } else {
            setError_Nombre('');
            if (descripcion == null || descripcion == '') {
                setError_Descripcion('La descripción es obligatoria');
            } else {
                setError_Descripcion('');
                if (url_imagen == null || url_imagen == '') {
                    setError_Imagen('La url de la imagen es obligatoria');
                } else {
                    setError_Imagen('');
                    if (estado == null || estado == '') {
                        setError_Estado('El estado es obligatorio');
                    } else {
                        setError_Estado('');
                        //ya se realizaron todas las validaciones
                        //enviar la peticion post para guardar los datos
                        guardarAviso();
                    }
                }
            } //fin de descrpcion
        }
    }
    useEffect(() => {

    }, [id]);

    if (cargando == true) {
        return (
            <NativeBaseProvider>
                <Center>
                    <HStack space={2} alignItems="center">
                        <Spinner accessibilityLabel="cargando aviso" />
                        <Heading color="primary.500">cargando Aviso...</Heading>
                    </HStack>
                </Center>

            </NativeBaseProvider>)

    } else {
        <NativeBaseProvider>
            <FormControl ml={1.5} isRequired>
                <FormControl.Label _text={{ bold: true }}>
                    Nombre del Aviso
                </FormControl.Label>
                <Input
                    w='90%'
                    value={nombre}
                    placeholder="Ingresa el nombre del aviso"
                    onChangeText={(value) => setNombre()}
                    maxLength={250} />
                <FormControl.HelperText
                    _text={{ fontSize: 'xs', color: "error.500", fontWeight: 500 }}>
                    {error_nombre}
                </FormControl.HelperText>
            </FormControl>

            <Divider my='2' />

            <FormControl ml={1.5} isRequired>
                <FormControl.Label _text={{ bold: true }}>
                    Descripcion del Aviso
                </FormControl.Label>
                <Input
                    w='90%'
                    value={descripcion}
                    placeholder="Ingresa la Descripcion del aviso"
                    onChangeText={(value) => setDescripcion()}
                    maxLength={250} />
                <FormControl.HelperText
                    _text={{ fontSize: 'xs', color: "error.500", fontWeight: 500 }}>
                    {error_descripcion}
                </FormControl.HelperText>
            </FormControl>

            <Divider my='2' />

            <FormControl ml={1.5} isRequired>
                <FormControl.Label _text={{ bold: true }}>
                    Url de la imagen del Aviso
                </FormControl.Label>
                <Input
                    w='90%'
                    value={url_imagen}
                    placeholder="Ingresa la url de la imagen del aviso"
                    onChangeText={(value) => setUrl_Imagen()}
                    maxLength={250} />
                <FormControl.HelperText
                    _text={{ fontSize: 'xs', color: "error.500", fontWeight: 500 }}>
                    {error_Imagen}
                </FormControl.HelperText>
            </FormControl>

            <Divider my='2' />

            <FormControl isRequired ml={1.5}>
                <Text italic mt='1.5' ml='1.5'>
                    Estado del aviso
                </Text>
                <Box w='100%'>
                    <Select
                        selectedValue={estado}
                        accessibilityLabel="Seleccione el estado del aviso"
                        placeholder="Seleccione el estado del aviso"
                        _selectedItem={{
                            bg: 'teal.600',
                            endIcon: <CheckIcon size='5' />
                        }}
                        mt={1}
                        onValueChange={itemValue => setEstado(itemValue)}>
                        {estado_list.map(estado =>
                            <Select.Item
                                key={estado}
                                label={estado}
                                value={estado} />)}
                    </Select>
                </Box>
                <Divider my={2}>
                    <Center>
                        <Button
                            size={sm}
                            colorScheme='primary'
                            onPress={() => ValidarAviso()}>
                            Guardar aviso
                        </Button>
                    </Center>
                </Divider>
            </FormControl>
        </NativeBaseProvider>

    }
    <View>
        <Text>editar aviso </Text>
    </View>
}