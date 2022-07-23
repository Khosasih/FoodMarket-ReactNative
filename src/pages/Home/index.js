import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4
} from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTab } from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.FoodCardContainer}>
            <Gap width={24} />
            <FoodCard image={FoodDummy1} title={'Nasi Kuning'} />
            <FoodCard image={FoodDummy2} title={'Nasi Goreng'} />
            <FoodCard image={FoodDummy3} title={'Soto Mie'} />
            <FoodCard image={FoodDummy4} title={'Nasi Putih'} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTab />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    paddingBottom: 32,
    paddingTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  catering: {
    fontSize: 22,
    fontFamily: 'Poppins-medium',
    color: '#020202',
  },
  subCatering: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  FoodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
