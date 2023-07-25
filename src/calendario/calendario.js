import { Calendar, CalendarFormats } from "expo-calendar";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, Platform } from "react-native";

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log("ESTOS SON TUS CALENDARIOS");
        console.log({ calendars });
      }
    })();
  }, []);

  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }

  async function CrearCalendario() {
    alert('entro');
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Calendarioexpo' };

    const newCalendarId = await Calendar.createCalendarAsync({
      title: 'Calendario Expo',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'Nombre de Calendario',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log('newCalendarId:', newCalendarId);
    // console.log(`Calendario creado correctamente. ID: ${newCalendarId}`);
  }

  return (
    <View style={styles.container}>
      <Text>Ejemplo de Calendario</Text>
      <Button title="Crear nuevo calendario" onPress={CrearCalendario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
