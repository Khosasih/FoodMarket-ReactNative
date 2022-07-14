import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Rating from '../Rating';

const FoodList = ({
  image,
  title,
  price,
  onPress,
  rating,
  items,
  paddingVertical,
  proses,
  orderItem,
  totalOrders,
  type,
  status,
  date,
  color,
}) => {
  const render = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.newTasteProfile(paddingVertical)}>
              <Image style={styles.imageContainer} source={image} />
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textSubtitle}> IDR {price}</Text>
              </View>
              <Rating rating={rating} />
            </View>
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.newTasteProfile(paddingVertical)}>
              <Image style={styles.imageContainer} source={image} />
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textSubtitle}> IDR {price}</Text>
              </View>
              <Text style={styles.items}>{items} items</Text>
            </View>
          </>
        );
      case 'proses':
        return (
          <>
            <View style={styles.newTasteProfile(paddingVertical)}>
              <Image style={styles.imageContainer} source={image} />
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textSubtitle}>
                  {items} items . IDR {price}
                </Text>
              </View>
            </View>
          </>
        );
      case 'selesai':
        return (
          <>
            <View style={styles.newTasteProfile(paddingVertical)}>
              <Image style={styles.imageContainer} source={image} />
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textSubtitle}>
                  {items} items . IDR {price}
                </Text>
              </View>
              <View style={styles.containerHistory}>
                <Text style={styles.dateSelesai}>{date}</Text>
                <Text style={styles.status(color)}>{status}</Text>
              </View>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.newTasteProfile(paddingVertical)}>
              <Image style={styles.imageContainer} source={image} />
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{title}</Text>
                {proses ? (
                  <Text style={styles.textSubtitle}>
                    {orderItem} items . IDR {totalOrders}
                  </Text>
                ) : (
                  <Text style={styles.textSubtitle}> IDR {price}</Text>
                )}
              </View>
              {items && !rating && (
                <Text style={styles.items}>{items} items</Text>
              )}
              {rating && !items && <Rating />}
            </View>
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.newTasteProfile(paddingVertical)}>{render()}</View>
    </TouchableOpacity>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  newTasteProfile: paddingVertical => ({
    flexDirection: 'row',
    paddingVertical: paddingVertical,
    backgroundColor: 'white',
    alignItems: 'center',
  }),
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 8,
    marginRight: 12,
    overflow: 'hidden',
  },
  textTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#020202',
  },
  textSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  textContainer: {
    flex: 1,
  },
  items: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  dateSelesai: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: '#8D92A3',
  },
  status: color => ({
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: color,
  }),
  containerHistory: {
    alignItems: 'center',
  },
});
