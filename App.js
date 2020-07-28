/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Background from './assets/icons/background.jpg';
import kakaoHelper from './components/KakaoHelper';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="white-content" />
      <View style={styles.body}>
        <Image style={styles.background} source={Background}/>
        <Text style={styles.title}>KUHT</Text>
      </View>
      <View style={styles.footer}>
        <Button 
          style={styles.button}
          title="카카오톡으로 시작하기"
          onPress={()=> kakaoHelper.login()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200,
    backgroundColor: Colors.white,
  },
  background: {
    top: 100,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
  },
  title: {
    top: 50,
    fontFamily: 'IndieFlower-Regular',
    fontSize: 100,
    textAlign: 'center',
    color: Colors.black,
  },
  footer: {
    width: Dimensions.get('window').width,
    height: 100,
    alignContent: 'center',
    display: 'flex',
  },
  button: {
    width: 10,
    height: 300,
    fontSize: 30,
    textAlign: 'center',
    color: Colors.black,
  },
});

export default App;
