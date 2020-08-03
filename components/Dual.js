'use strict';
import React, {PureComponent} from 'react';
import axios from 'axios';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
  Image,
  Modal,
  Button,
  // CameraRoll,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

class Dual extends PureComponent {
  state = {
    image_uri: '',
    // modalVisible: false,
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        {/* <Modal
          style={styles.modal}
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
          <Image
            style={styles.image}
            source={{uri: `data:image/gif;base64,${this.state.image_uri}`}}
          />
          <View style={styles.btnContainer}>
            <Button
              style={styles.btn}
              title="Send"
              onPress={() =>
                navigation.navigate('Request', {
                  image_uri: `data:image/gif;base64,${this.state.image_uri}`,
                })
              }
            />
            <Button
              style={styles.btn}
              title="Retake"
              onPress={() => this.setState({modalVisible: false})}
            />
          </View>
        </Modal> */}
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      // this.setState({
      //   // modalVisible: true,
      //   image_uri: data.base64,
      // });
      this.props.navigation.navigate('Request', {
        image_uri: `data:image/gif;base64,${data.base64}`,
      });
      this.camera.stopPreview();

      // fetch('http://127.0.0.1:8000/segmentation', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     uri: `data:image/gif;base64,${this.state.image_uri}`,
      //   }),
      // });
      // CameraRoll.save(data.uri, {type: 'photo', album: 'KUHT'});
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      //   {
      //     title: 'My App Storage Permission',
      //     message:
      //       'My App needs access to your storage ' +
      //       'so you can save your photos',
      //   }, // axios({
      //   url: 'http://127.0.0.1:8000/segmentation',
      //   method: 'post',
      //   data: JSON.stringify({
      //     uri: `data:image/gif;base64,${this.state.image_uri}`,
      //   }),
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  };

  // sendPicture = async () => {
  // try {
  //   let response = await fetch(
  //     'https://kuht2020.df.r.appspot.com/segmentation',
  //     {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         uri: `data:image/gif;base64,${this.state.image_uri}`,
  //       }),
  //     },
  //   );

  // axios({
  //   url: 'http://127.0.0.1:8000/segmentation',
  //   method: 'post',
  //   data: JSON.stringify({
  //     uri: `data:image/gif;base64,${this.state.image_uri}`,
  //   }),
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   let json = await response.json();
  //   return json;
  // } catch (error) {
  //   console.log(error);
  // }
  // };

  // checkAndroidPermission = async () => {
  //   try {
  //     const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  //     await PermissionsAndroid.request(permission);
  //     Promise.resolve();
  //   } catch (error) {
  //     Promise.reject(error);
  //   }
  // };

  // savePicture = async (data) => {
  //   if (Platform.OS === 'android') {
  //     await this.checkAndroidPermission();
  //   }
  //   CameraRoll.saveToCameraRoll(data.uri);
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  modal: {
    // position: 'absolute',
    // flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    // alignItems: 'stretch',

    // width: '100%',
    // height: '100%',
  },
  image: {
    flex: 9,
  },
  btnContainer: {
    flex: 1,
    // display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    // width: '100%',
    // height: '10%',
  },
  btn: {
    flexGrow: 1,
    // width: '100%',
    // height: '100%',
  },
});

export default Dual;
