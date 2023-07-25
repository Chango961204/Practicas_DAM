import React from "react";
import { Button, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, Icon, Spinner, View, Box ,Fab} from "native-base";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
//Importamos estas librerias p/ poder consumir nuestra app local
import Constants from "expo-constants";
const { manifest } = Constants;

const uri = `https://${manifest.debuggerHost.split(':').shift()}:3000/`;

export default function App({ route, navigation }) {
    console.log('parametros de route');
    console.log(route);
    const { id } = route.params;
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const traerDatos = async () => {
        const response = await fetch((uri + 'crearAvisos'+'id='+id+ '&nombre=' + nombre + '&descripcion=' + descripcion + '& url_imagen=' + url_imagen + '& estado=' + estado), {
            body: JSON.stringify({ id: id }),
            headers: {
                "Content-Type": "application/json, image/png",
                Accept: "application/json, text/plain, image/png */*",
            },
        });
        const result = await response.json();
        console.log('resultado')
        console.log(result);
        setDatos(result);
        setCargando(false);
    };

    useEffect(() => {
        traerDatos(id);
    }, [id]);

    if (cargando) {
        return (
            <NativeBaseProvider>
                <Center flex={1}>
                    <HStack space={2} alignItems="center">
                        <Spinner accessibilityLabel="Cargando aviso" />
                        <Heading color="primary.500" fontSize="md">
                            Cargando Aviso...
                        </Heading>
                    </HStack>
                </Center>
                <Box h={40} position="relative" w="30%"> {/* Corregido aquí */}
                    <Fab
                        onPress={() => navigation.navigate("crearAvisos")}
                        right={2} // Corregido aquí
                        key={1}
                        bottom={20}
                        borderRadius="full"
                        colorScheme="primary"
                        placement="bottom-right" // Corregido aquí
                        icon={
                            <FontAwesome name="plus-circle" size={24} color="white" />
                        }
                        label="Registrar nuevo aviso"
                    />
                </Box>
            </NativeBaseProvider>
        );
    } else {
        return (
            <NativeBaseProvider>
                <Center flex={1} px={3}>
                    <Box
                        width="100%"
                        height="100%"
                        rounded="xl"
                        overflow="hidden"
                        borderColor="coolGray.200"
                        borderWidth={1} // Corregido aquí
                    >
                        <Box>
                            <AspectRatio width="100%" ratio={16 / 9}>
                                {(() => {
                                    if (datos.url_imagen) {
                                        const IMG_URL = datos.url_imagen;
                                        return (
                                            <Image key={datos.id} source={{ uri: IMG_URL }} alt="image" style={styles.image} />
                                        )
                                    } else {
                                        return (
                                            <Image key={datos.id} source={{ uri: IMG_URL }} alt="image" style={styles.image} />

                                        )
                                    }
                                })}

                            </AspectRatio>
                            <Center
                                bg="#rgb(151,132,102)"
                                _dark={{
                                    bg: "#rgb(151,132,102)",
                                }}
                                _text={{
                                    color: "warmGray.50",
                                    fontWeight: "700",
                                    fontSize: "xs",
                                }}
                                position="absolute"
                                bottom="0"
                                px="3" // Corregido aquí
                                py="1.5"
                            >
                                {datos.nombre}
                            </Center>
                        </Box>
                        <Stack p={2} space={3}>
                            <Stack space={1}>
                                <Heading size="md" ml={-1}>
                                    {datos.nombre}
                                </Heading>
                            </Stack>
                            <HStack alignItems="center" space={4} justifyContent="space-between" >
                                <HStack alignItems="center" >
                                    <Text
                                        color="coolgray.600"
                                        _dark={{ color: "warmGray.200" }}
                                        fontWeight="400"
                                    >
                                        {datos.descripcion}
                                    </Text>
                                </HStack>
                            </HStack>
                            <HStack alignItems="center" space={4} justifyContent="space-between" >
                                <Button onPress={() => navigation.navigate('EditarAvisos', { id: id })} size="md" colorScheme="primary" >Editar aviso</Button>
                            </HStack>
                            <HStack alignItems="center" space={4} justifyContent="space-between" >
                                <Button size="md" colorScheme="primary" >ELiminar aviso</Button>
                            </HStack>
                        </Stack>
                    </Box>
                </Center >
            </NativeBaseProvider >
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 75,
        height: 75,
        resizeMode: "contain",
        marginLeft: 10,
    },
});
