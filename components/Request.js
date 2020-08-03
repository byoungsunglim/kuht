import React, {useState} from 'react';
import axios from 'axios';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  // CameraRoll,
} from 'react-native';

function Request({route, navigation}) {
  const {image_uri} = route.params;
  console.log(image_uri);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image_uri}} />
      <View style={styles.btnContainer}>
        <Button style={styles.btn} title="Send" onPress={() => sendPicture()} />
        <Button
          style={styles.btn}
          title="Retake"
          onPress={() => navigation.navigate('Dual')}
        />
      </View>
    </View>
  );

  function sendPicture() {
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

    axios({
      url: 'https://kuht2020.df.r.appspot.com/segmentation',
      method: 'post',
      data: JSON.stringify({
        image_uri: image_uri,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    //   let json = await response.json();
    //   return json;
    // } catch (error) {
    //   console.log(error);
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '90%',
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

export default Request;
