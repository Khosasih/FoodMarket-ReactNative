import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import FoodList from '../FoodList';
import {useNavigation} from '@react-navigation/native';
import { Gap } from '../../atoms';

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
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          <FoodList
            rating={4.5}
            image={FoodDummy4}
            title="Bihun Goreng"
            price="75.000"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
            type="product"
          />
          <FoodList
            rating={4.5}
            image={FoodDummy3}
            title="Nasi Gurih"
            price="50.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
          <FoodList
            rating={4.5}
            image={FoodDummy2}
            title="Mie Sedap"
            price="15.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
          <FoodList
            rating={4.5}
            image={FoodDummy1}
            title="Bakso Kering"
            price="20.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
        </View>
        <Gap height={80}/>
      </ScrollView>
    );
  };

  const Popular = () => {
    const navigation = useNavigation();
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          <FoodList
            rating={4.5}
            image={FoodDummy1}
            title="Nasi Goreng Mang Ali"
            price="75.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
          <FoodList
            rating={4.5}
            image={FoodDummy3}
            title="Bakso Selamet"
            price="50.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
          <FoodList
            rating={4.5}
            image={FoodDummy2}
            title="Nasi Goreng Spesial"
            price="15.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
          <FoodList
            rating={4.5}
            image={FoodDummy4}
            title="Bakso Setiabudi"
            price="20.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
        </View>
        <Gap height={80}/>
      </ScrollView>
    );
  };

  const Recommended = () => {
    const navigation = useNavigation();
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          <FoodList
            rating={4.5}
            image={FoodDummy4}
            title="Nasi Kuning"
            price="75.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
          <FoodList
            rating={4.5}
            image={FoodDummy2}
            title="Nasi Goreng"
            price="50.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
          <FoodList
            rating={4.5}
            image={FoodDummy1}
            title="Mie Rebus"
            price="15.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
          <FoodList
            rating={4.5}
            image={FoodDummy3}
            title="Nasi Uduk"
            price="20.000"
            type="product"
            onPress={() => navigation.navigate('FoodDetail')}
            paddingVertical={5}
          />
        </View>
        <Gap height={80}/>
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
