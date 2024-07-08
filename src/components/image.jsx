import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Windowheight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;

export default function ImageCrousal({ address, Currindex, totalImage }) {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image source={{ uri: address }} style={styles.ImageDensions} />
      <View style={styles.curretPosition}>
        <Text style={{ color: 'white', fontSize: 15 }}>
          {Currindex + 1}/{totalImage}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageDensions: {
    width: WindowWidth,
    height: Windowheight * 0.3,
  },
  curretPosition: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 5,
  },
});
