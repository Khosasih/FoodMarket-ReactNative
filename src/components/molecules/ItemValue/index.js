import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Number from '../Number';

const ItemValue = (
  {text, value, color = '#020202', fontFamily = 'Poppins-Regular', type}
) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(color, fontFamily)} />
      ) : (
        <Text style={styles.value(color, fontFamily)}>{value}</Text>
      )}
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
  value: (color, fontFamily) => ({
    fontFamily: fontFamily,
    fontSize: 14,
    color: color,
  }),
});
