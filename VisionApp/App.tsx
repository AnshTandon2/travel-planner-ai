import { useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera'
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
  const camref = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();

  const ready = async() => {
    const camera = camref.current as unknown as CameraView;
    const data = await camera.takePictureAsync();
    console.log(data);
  };

  return (
    permission?.granted ?
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={camref} onCameraReady={ready}></CameraView>
    </View>
    :
    <View style={styles.container}>
      <Button onPress={requestPermission} title='Grant Permission'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    height: 500,
    width: 300
  }
});
