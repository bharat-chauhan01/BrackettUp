import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install react-native-vector-icons

export const renderHeader = (navigation, header) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" style={styles.iconStyle} size={24} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{header}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  iconStyle: {
    color: '#000',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
