import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconStarOff, IconStarOn} from '../../../assets';
import Number from '../Number';

const Rating = ({number}) => {
  const renderStar = () => {
    let rating = [];
    for (let i=1 ; i<=5 ; i++) {
      if (i <= number) {
        rating.push(<IconStarOn key={i} />);
      } else {
        rating.push(<IconStarOff key={i}/>);
      }
    }
    return rating;
  };
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.StarContainer}>
        {renderStar()}
        {/* <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOff /> */}
      </View>
      <Number number={number} type='decimal'/>
      {/* <Text>{number}</Text> */}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  StarContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
