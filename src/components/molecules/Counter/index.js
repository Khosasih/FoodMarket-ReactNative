import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IconMin, IconPlus} from '../../../assets';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  let result = value;
  const onCount = type => {
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <IconMin />
      </TouchableOpacity>
      <Text style={styles.counter}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
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
  containerCounter: {
    height: 26,
    width: 26,
  },
});
