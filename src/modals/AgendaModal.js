import isEmpty from 'lodash/isEmpty';
import React, { useCallback } from 'react';
import { StyleSheet, Alert, View, Text, TouchableOpacity } from 'react-native';

const AgendaItem = props => {
  const { item } = props;

  const itemPressed = useCallback(() => {
    if (!item.booked) {
      Alert.alert(item.title);
    }
  }, [item]);

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>Not Available</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={!item.booked ? itemPressed : null}
      style={[styles.item, item.booked && styles.bookedBackground]}
    >
      <View style={styles.date}>
        <Text style={[styles.itemHourText, item.booked && styles.strikethrough]}>{item.hour}</Text>
        <Text style={[styles.itemDurationText, item.booked && styles.strikethrough]}>
          {item.duration}
        </Text>
      </View>
      <View style={[styles.activityInfo]}>
        <Text style={[styles.itemTitleText, item.booked && styles.strikethrough]}>
          {item.title}
        </Text>
        <Text style={[styles.instructorText, item.booked && styles.strikethrough]}>
          {item.instructor}
        </Text>
      </View>
      <View style={styles.creditBox}>
        <View style={[styles.creditsContainer, item.discountedPrice && styles.greyBackground]}>
          <Text style={[styles.creditsText, item.discountedPrice && styles.strikethrough]}>
            {item.originalPrice}
          </Text>
        </View>
        {item.discountedPrice && (
          <View style={[styles.creditsContainer, styles.discountedContainer]}>
            <Text style={styles.creditsText}>{item.discountedPrice}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AgendaItem);

const styles = StyleSheet.create({
  item: {
    paddingStart: 30,
    paddingBottom: 10,
    paddingTop: 10,
    paddingEnd: 30,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
  },
  itemHourText: {
    color: 'black',
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 0,
    marginLeft: 4,
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: '500',
    fontSize: 14,
  },
  instructorText: {
    marginLeft: 16,
    fontSize: 11,
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    backgroundColor: '#FFFFFF',
  },
  emptyItemText: {
    color: 'grey',
    fontSize: 14,
  },
  creditsText: {
    fontSize: 14,
    color: 'black', // Set the text color to black for contrast
  },
  discountedContainer: {
    borderColor: '#15B339',
    backgroundColor: '#F1F9F2',
  },
  creditsContainer: {
    paddingHorizontal: 3, // Add some padding inside the box
    paddingVertical: 1,
    borderColor: 'black',
    borderWidth: 0.19,
    marginHorizontal: 3, // Add space between the boxes
    position: 'relative', // Needed for the diagonal line
  },
  greyBackground: {
    backgroundColor: '#ECECEC', // Add grey background color
  },
  bookedBackground: {
    backgroundColor: '#ECECEC',
  },
  strikethrough: {
    textDecorationLine: 'line-through', // Apply strikethrough style
  },
  date: {
    flex: 1,
    flexDirection: 'column',
  },
  activityInfo: {
    flex: 2,
    flexDirection: 'column',
  },
  creditBox: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
