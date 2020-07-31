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

function Home({navigation}) {
  return (
    <>
      <StatusBar barStyle="white-content" />
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.single}
          onPress={() => navigation.navigate('Single')}>
          <Image source={SingleImg} style={styles.img} />
          <Text style={styles.txt}>Single</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dual}
          onPress={() => navigation.navigate('Dual')}>
          <Image source={DualImg} style={styles.img} />
          <Text style={styles.txt}>Dual</Text>
        </TouchableOpacity>
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
  single: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dual: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '70%',
    height: '70%',
    borderRadius: 100,
    resizeMode: 'cover',
  },
  txt: {
    fontSize: Dimensions.get('window').height * 0.05,
    fontFamily: 'IndieFlower-Regular',
    color: Colors.white,
  },
});

export default Home;
