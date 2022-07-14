import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconMove} from '../../../assets';

const ItemListMenu = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <IconMove />
    </View>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',   
  },
});
