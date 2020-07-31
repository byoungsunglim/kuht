import * as React from 'react';

import SingleImg from '../assets/icons/single.jpg';
import DualImg from '../assets/icons/dual.jpg';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Dual({navigation}) {
  return (
    <>
      <StatusBar barStyle="white-content" />
      <View style={styles.body}>
        <Text>Pick a friend!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.black,
  },
});

export default Dual;
