import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FoodDummy5, IconBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy5} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.Container}>
        <View style={styles.mainContainer}>
          <View style={styles.counterContainer}>
            <View>
              <Text style={styles.title}>Nasi Kuning</Text>
              <Rating />
            </View>
            <View>
              <Counter/>
            </View>
          </View>
          <Text style={styles.content}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.subTitle}>Ingredients:</Text>
          <Text style={styles.content}>Seledri, telur, blueberry, madu. </Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.textTotalPrice}>Total Price:</Text>
            <Text style={styles.textPrice}>IDR 12.289.000</Text>
          </View>
          <View style={styles.footer}>
            <Button text={'Order Now'} onPress={()=> navigation.navigate('OrderSummary')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingVertical: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  content: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
    marginBottom: 16,
  },

  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    width: 163,
  },
  priceContainer: {
    flex: 1,
  },
  textTotalPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#8D92A3',
  },
  textPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#020202',
  },
});
