import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
    IconStarOff,
    IconStarOn
  } from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.Star}>
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOff />
      </View>
      <Text>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
    Star: {
        flexDirection: 'row',
      },
      ratingContainer: {
        flexDirection: 'row',
      },
});
