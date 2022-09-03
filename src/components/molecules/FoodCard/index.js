import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';
import Rating from '../Rating';

const FoodCard = ({image, name, rating, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <Image source={image} style={styles.images} />
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Gap height={5} />
          <Rating number={rating} />
          {/* <Rating/> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 24,
  },
  images: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppin-Regular',
    color: '#020202',
  },
  content: {
    padding: 12,
  },
});
