import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );
  if (status !== 'granted') {
    Alert.alert('Sorry, we need camera roll permissions to make this work!');

    return false;
  }

  return true;
}

const PhotoPicker = props => {
  const { onPick } = props;
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();

    if (!hasPermissions) {
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      setImage(result.uri);
      onPick(result.uri);
    }
  };

  // const getPermissionAsync = async () => {
  //   if (Constants.platform.ios) {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     if (status !== 'granted') {
  //       alert('Sorry, we need camera roll permissions to make this work!');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getPermissionAsync();
  // }, []);

  return (
    <View style={styles.wrapper}>
      <Button title="Зробити фото" onPress={takePhoto} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
});

export default PhotoPicker;
