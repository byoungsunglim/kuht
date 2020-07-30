import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Background from '../assets/icons/background.jpg';
import KakaoHelper from './KakaoHelper';

import KakaoBtn from '../assets/icons/kakao_login_btn.png';

function Login() {
  return (
    <>
      <StatusBar barStyle="white-content" />
      <View style={styles.body}>
        <Image style={styles.background} source={Background} />
        <Text style={styles.title}>KUHT</Text>
        <TouchableOpacity
          style={styles.login_btn}
          onPress={() => KakaoHelper.login()}>
          <Image source={KakaoBtn} style={styles.login_image} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  background: {
    top: '10%',
    width: '100%',
    height: '50%',
  },
  title: {
    position: 'absolute',
    top: '60%',
    width: '100%',
    height: 100,
    fontFamily: 'IndieFlower-Regular',
    fontSize: 100,
    textAlign: 'center',
    color: Colors.black,
    zIndex: 2,
  },
  login_btn: {
    position: 'absolute',
    bottom: 100,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.white,
  },
  login_image: {
    // width: 80,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Login;
