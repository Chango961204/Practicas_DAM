import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setCameraPermission(status === "granted");
    })();
  }, []);

  const handleCameraTypeChange = () => {
    setCameraType((prevType) =>
      prevType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (cameraPermission === null) {
    return <View />;
  }

  if (!cameraPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Necesitas permisos para acceder a la cámara
        </Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={() => {
            Camera.requestPermissionsAsync().then(({ status }) =>
              setCameraPermission(status === "granted")
            );
          }}
        >
          <Text style={styles.permissionButtonText}>Solicitar permisos</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={cameraType} />
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={handleCameraTypeChange}
      >
        <Text style={styles.bottomButtonText}>Voltear cámara</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  permissionText: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },
  permissionButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#2196F3",
    borderRadius: 8,
  },
  permissionButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
    width: "100%",
    aspectRatio: 3 / 4,
  },
  bottomButton: {
    position: "absolute",
    bottom: 32,
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#2196F3",
    borderRadius: 8,
  },
  bottomButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
