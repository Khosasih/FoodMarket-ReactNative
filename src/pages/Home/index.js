import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTab} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  });

  const layout = useWindowDimensions();
  return (
    <ScrollView
      contentContainerStyle={{
        height: layout.height * 1.4,
        //ditambah * 1.4 kalau untuk scroll full
      }}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.FoodCardContainer}>
              <Gap width={24} />
              {food.map(itemFood => {
                return (
                  <FoodCard
                    key={itemFood.id}
                    name={itemFood.name}
                    // kalo database image path tidak ada url maka tambahkan ini
                    // image={{uri:'http://192.168.0.140:8000/storage/'+itemFood.picturePath}} key={itemFood}
                    image={{uri: itemFood.picturePath}}
                    rating={itemFood.rate}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                  />
                );
              })}
              {/* <FoodCard image={FoodDummy1} title={'Nasi Kuning'} />
              <FoodCard image={FoodDummy2} title={'Nasi Goreng'} />
              <FoodCard image={FoodDummy3} title={'Soto Mie'} />
              <FoodCard image={FoodDummy4} title={'Nasi Putih'} /> */}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTab />
        </View>
      </View>
    </ScrollView>
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
