import React, { useState } from "react";
import { Divider, Button, AspectRatio, CheckIcon, FormControl, Input, NativeBaseProvider, Center, Image, Text, Box, Select } from 'native-base';

const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000/`;

export default function App() {
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

    async function guardarAviso() {
        const data = { 'nombre': nombre, 'descripcion': descripcion, 'url_imagen': uri, 'estado': estado };
        const response = await addTextAndPropsToStrings.post(uri + '/avisos', {
            params: data
        });
        const result = await response;
        console.log(result);


    }
    return (
        <NativeBaseProvider>
            <Box>
                <AspectRatio
                    width='100%'
                    ratio={9 / 1}>
                    <Image
                        source={{ uri: 'https://edi78un6svq.exactdn.com/wp-content/uploads/2022/04/Sin-titulo4-12.jpg' }}
                        alt="image" />
                </AspectRatio>
                <Center
                    bg='#rgb(151,132,102)'
                    _dark={{
                        bg: '#rgb(151,132,102)'
                    }}
                    _text={{
                        color: 'warmGray.50',
                        fontWeight: '700',
                        fontSize: 'xs'
                    }}
                    position='absolute'
                    bottom='0'
                    px='3'
                    py={1.5}
                >
                    Información del Aviso
                </Center>
            </Box>
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
    )
}