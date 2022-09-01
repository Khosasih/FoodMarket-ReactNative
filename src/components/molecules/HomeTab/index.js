import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import FoodList from '../FoodList';
import {useNavigation} from '@react-navigation/native';
import {Gap} from '../../atoms';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

const HomeTab = () => {
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#FF4500',
        height: 3,
        width: 0.6,
        marginLeft: 0.3,
      }}
      style={{
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
      }}
      tabStyle={{width: 'auto'}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: focused ? '#FF4500' : '#8D92A3',
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  const NewTaste = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {newTaste} = useSelector(state => state.homeReducer);
    useEffect(() => {
      dispatch(getFoodDataByTypes('new_food'));
    }, []);
    return (
      <ScrollView
        key={index}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          {newTaste.map(item => {
            return (
              <FoodList
                key={item.id}
                rating={item.rate}
                image={{uri: item.picturePath}}
                title={item.name}
                price={item.price}
                onPress={() => navigation.navigate('FoodDetail')}
                paddingVertical={5}
                type="product"
              />
            );
          })}
        </View>
        <Gap height={80} />
      </ScrollView>
    );
  };

  const Popular = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {popular} = useSelector(state => state.homeReducer);
    useEffect(() => {
      dispatch(getFoodDataByTypes('popular'));
    }, []);
    return (
      <ScrollView
        key={index}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          {popular.map(item => {
            return (
              <FoodList
                key={item.id}
                rating={item.rate}
                image={{uri: item.picturePath}}
                title={item.name}
                price={item.price}
                type="product"
                onPress={() => navigation.navigate('FoodDetail')}
                paddingVertical={5}
              />
            );
          })}
        </View>
        <Gap height={80} />
      </ScrollView>
    );
  };

  const Recommended = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {recommended} = useSelector(state => state.homeReducer);
    useEffect(()=>{
      dispatch(getFoodDataByTypes('recommended'))
    }, [])
    return (
      <ScrollView
        key={index}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          {recommended.map(item => {
            return (
              <FoodList
                key={item.id}
                rating={item.rate}
                image={{uri: item.picturePath}}
                title={item.name}
                price={item.price}
                type="product"
                onPress={() => navigation.navigate('FoodDetail')}
                paddingVertical={5}
              />
            );
          })}
        </View>
        <Gap height={80} />
      </ScrollView>
    );
  };

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  newTasteContainer: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
});
