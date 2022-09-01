import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';

const Number = ({number, type}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={number}
        displayType="text"
        renderText={value => <Text>{value}</Text>}
        decimalSeparator="."
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      displayType="text"
      prefix="IDR "
      renderText={value => <Text>{value}</Text>}
      decimalSeparator=","
    />
  );
};

export default Number;

const styles = StyleSheet.create({});