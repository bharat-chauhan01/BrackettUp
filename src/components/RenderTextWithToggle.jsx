import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RenderTextWithToggle = ({ text }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  if (text && text.length > 80) {
    return (
      <View>
        <Text style={styles.text}>{showFullText ? text : `${text.substring(0, 60)}...`}</Text>
        <Text style={styles.moreLink} onPress={toggleText}>
          {showFullText ? 'Read less' : 'Read more'}
        </Text>
      </View>
    );
  }

  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
    marginTop: 12,
    // marginBottom:12,
    lineHeight: 22,
  },
  moreLink: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});

export default RenderTextWithToggle;
