import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import FoodList from '../FoodList';
import {useNavigation} from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';

const ProfileTab = () => {
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#020202',
        height: 3,
        width: 0.5,
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
            color: focused ? '#020202' : '#8D92A3',
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  const Account = () => {
    const navigation = useNavigation();
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          <ItemListMenu text={'Edit Profile'}/>
          <ItemListMenu text={'Home Address'}/>
          <ItemListMenu text={'Security'}/>
          <ItemListMenu text={'Payment'}/>
        </View>
      </ScrollView>
    );
  };

  const FoodMarket = () => {
    const navigation = useNavigation();
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          <ItemListMenu  text={'Rate App'}/>
          <ItemListMenu text={'Help Center'}/>
          <ItemListMenu text={'Privacy & Policy'}/>
          <ItemListMenu text={'Terms & Conditions'}/>
        </View>
      </ScrollView>
    );
  };

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
  });

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
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

export default ProfileTab;

const styles = StyleSheet.create({
  newTasteContainer: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
});
