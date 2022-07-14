import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemValue = ({text, value, color = '#020202', fontFamily= 'Poppins-Regular'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.value(color,fontFamily)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  value: (color,fontFamily) => ({
    fontFamily: fontFamily,
    fontSize: 14,
    color: color,
  }),
});
