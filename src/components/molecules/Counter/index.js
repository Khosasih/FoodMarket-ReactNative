import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconMin, IconPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <IconMin />
      </TouchableOpacity>
      <Text style={styles.counter}>17</Text>
      <TouchableOpacity>
        <IconPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
    marginHorizontal: 10,
  },
  containerCounter:{
      height: 26,
      width: 26
  }
});
