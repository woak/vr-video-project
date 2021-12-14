import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  asset,
  NativeModules,
  Environment,
  VideoModule
} from 'react-360';
const { AudioModule } = NativeModules;

const AUDIO_PLAYER_NAME = "FOREST_AUDIO";
const AUDIO_SOURCE = "creek.wav"

const VIDEO_PLAYER_NAME = "FOREST_VIDEO";

export class VrBase extends React.Component {

  playing = false

  constructor(props) {
    super(props);

    // spatial audio
    AudioModule.createAudio(AUDIO_PLAYER_NAME, {
      source: asset(AUDIO_SOURCE),
      is3d: true,
      autoPlay: false
    });
    // Play a specific video
    // Environment.setBackgroundVideo(VIDEO_PLAYER_NAME);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.playing = !this.playing;
    if (this.playing) {
            
      AudioModule.play(AUDIO_PLAYER_NAME, {
        position: [0, -1, -2.5], // Position horn at truck in 3D space
      });
      // VideoModule.resume(VIDEO_PLAYER_NAME)
    } else {
      AudioModule.pause(AUDIO_PLAYER_NAME);
      // VideoModule.pause(VIDEO_PLAYER_NAME);
    }
  
  }

  render() {

    return <View style={styles.root}>
      <Text style={[
        styles.rootText,
        { opacity: 1 }
      ]}>
        {this.playing ? "Pause" : "Play"}
      </Text>
      <VrButton
        style={[
          styles.rootButton,
          { backgroundColor: "red" }
        ]}
        onClick={this.onClick}
      />
    </View >;
  }
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