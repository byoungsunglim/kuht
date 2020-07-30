import * as React from 'react';
import {StackActions} from '@react-navigation/native';

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

import KakaoBtn from '../assets/icons/kakao_login_btn.png';
import KakaoLogins from '@react-native-seoul/kakao-login';

function Login({navigation}) {
  function handleLogin() {
    KakaoLogins.login()
      .then((result) => {
        console.log(`logout: ${JSON.stringify(result)}`);
        KakaoLogins.getProfile()
          .then((profile) => {
            console.log(`logout: ${JSON.stringify(profile)}`);
            navigation.dispatch(StackActions.replace('Home', {user: profile}));
            return profile;
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <StatusBar barStyle="white-content" />
      <View style={styles.body}>
        <Image style={styles.background} source={Background} />
        <Text style={styles.title}>KUHT</Text>
        <TouchableOpacity
          style={styles.login_btn}
          onPress={() => handleLogin()}>
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
