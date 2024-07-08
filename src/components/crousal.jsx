import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import ImageCrousal from './image';
import { imageURL } from '../constants/imageURLs';

const Windowheight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;

export default function Crousal() {
  const [index, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef();

  const handelPress = event => {
    const x_pos = event.nativeEvent.locationX;
    const fraction = x_pos / WindowWidth;

    fraction < 0.5
      ? setCurrentIndex(Math.floor((index - 1 + imageURL.length) % imageURL.length))
      : setCurrentIndex(Math.floor((index + 1) % imageURL.length));
  };

  return (
    <TouchableOpacity style={{ zIndex: -1 }} onPress={handelPress} activeOpacity={1}>
      {/* <ScrollView horizontal ref={scrollViewRef} onScroll={handelScroll} > */}
      {/* {imageURL.map((item,index) => ( <ImageCrousal key={index} address={item}/> ))} */}
      <ImageCrousal
        key={index}
        address={imageURL[index]}
        Currindex={index}
        totalImage={imageURL.length}
      />
      {/* </ScrollView> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ImageDensions: {
    width: '50%',
    height: Windowheight * 0.4,
  },
});
