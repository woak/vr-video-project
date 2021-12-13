import React, { PureComponent, useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { asset, NativeModules } from 'react-360';
const { AudioModule } = NativeModules;

function VrBase() {

  const [playing, setPlaying] = useState(false)

  return  <View style={styles.root}>
      <Text style={[
        styles.rootText,
        {opacity: 1}
      ]}>
      </Text>
      <VrButton
        style={[
          styles.rootButton,
          {backgroundColor: "gray"}
        ]}
        onClick={() => {
          // spatial audio
          AudioModule.createAudio('Creek', {
            source: asset('creek.wav'),
            is3d: true
          });

          AudioModule.play('Creek', {
            position: [0, -1, -2.5], // Position horn at truck in 3D space
          });
        }}
      />
    </View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  rootText: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
  },
  rootButton: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 0,
  }
});

AppRegistry.registerComponent('VrBase', () => VrBase);