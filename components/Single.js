import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Dimensions,
  // CameraRoll,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Single({navigation}) {
  const [pushups, setPushups] = useState(0);
  const [squats, setSquats] = useState(0);
  const [lunges, setLunges] = useState(0);
  const [flanks, setFlanks] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{pushups}</Text>
        <Text style={styles.text}>Push Up</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{squats}</Text>
        <Text style={styles.text}>Squat</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{lunges}</Text>
        <Text style={styles.text}>Lunge</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{flanks}</Text>
        <Text style={styles.text}>Flank</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#a9a9a9',
  },
  dataContainer: {
    width: '40%',
    height: Dimensions.get('window').height * 0.4,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: Dimensions.get('window').height * 0.05,
    marginBottom: Dimensions.get('window').height * 0.05,
    borderRadius: 50,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  data: {
    top: '30%',
    height: '30%',
    fontSize: Dimensions.get('window').height * 0.4 * 0.3,
    fontFamily: 'IndieFlower-Regular',
  },
  text: {
    top: '50%',
    height: '20%',
    fontSize: Dimensions.get('window').height * 0.4 * 0.1,
    fontFamily: 'IndieFlower-Regular',
  },
});

export default Single;
