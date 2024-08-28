import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RatingBreakdownItem = ({ starLabel, ratingCount }) => {
  return (
    <View style={styles.breakdownRow}>
      <Text style={styles.breakdownLabel}>{starLabel}</Text>
      <View style={styles.breakdownBar}>
        <View
          style={[
            styles.bar,
            { width: `${ratingCount / 10}%` }, 
          ]}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  breakdownLabel: {
    width: 60,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  breakdownBar: {
    flex: 1,
    height: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#000000',
    minWidth: 2,
  },
  
});

export default RatingBreakdownItem;
