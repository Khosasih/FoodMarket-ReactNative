import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import FoodList from '../FoodList';
import {useNavigation} from '@react-navigation/native';

const OrderTab = () => {
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

  const Proses = () => {
    const navigation = useNavigation();
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          <FoodList
            image={FoodDummy4}
            title="Bihun Goreng"
            price="75.000"
            onPress={() => navigation.navigate('OrderDetail')}
            proses={true}
            items={3}
            type="proses"
            paddingVertical={5}
          />
          <FoodList
            image={FoodDummy3}
            title="Nasi Gurih"
            price="50.000"
            onPress={() => navigation.navigate('OrderDetail')}
            proses={true}
            items={5}
            type="proses"
            paddingVertical={5}
          />
          <FoodList
            image={FoodDummy2}
            title="Mie Sedap"
            price="15.000"
            onPress={() => navigation.navigate('OrderDetail')}
            proses={true}
            items={10}
            type="proses"
            paddingVertical={5}
          />
          <FoodList
            image={FoodDummy1}
            title="Bakso Kering"
            price="20.000"
            onPress={() => navigation.navigate('OrderDetail')}
            items={5}
            type="proses"
            paddingVertical={5}
          />
        </View>
      </ScrollView>
    );
  };

  const Selesai = () => {
    const navigation = useNavigation();
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.newTasteContainer}>
          <FoodList
            image={FoodDummy1}
            title="Nasi Goreng Mang Ali"
            price="75.000"
            onPress={() => navigation.navigate('OrderDetail')}
            type="selesai"
            date={'10 June, 11:00'}
            status={'Success'}
            color={"#1ABC9C"}
            paddingVertical={5}
          />
          <FoodList
            image={FoodDummy3}
            title="Bakso Selamet"
            price="50.000"
            onPress={() => navigation.navigate('OrderDetail')}
            type="selesai"
            date={'10 June, 11:00'}
            status={'Cancle'}
            color="#D9435E"
            paddingVertical={5}
          />
          <FoodList
            image={FoodDummy2}
            title="Nasi Goreng Spesial"
            price="15.000"
            onPress={() => navigation.navigate('OrderDetail')}
            type="selesai"
            date={'10 June, 14:00'}
            status={'Success'}
            color={"#1ABC9C"}
            paddingVertical={5}
          />
          <FoodList
            image={FoodDummy4}
            title="Bakso Setiabudi"
            price="20.000"
            onPress={() => navigation.navigate('OrderDetail')}
            type="selesai"
            date={'10 June, 15:00'}
            status={'Cancle'}
            color={"#D9435E"}
            paddingVertical={5}
          />
        </View>
      </ScrollView>
    );
  };

  const renderScene = SceneMap({
    1: Proses,
    2: Selesai,
  });

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Proses'},
    {key: '2', title: 'Selesai'},
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

export default OrderTab;

const styles = StyleSheet.create({
  newTasteContainer: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
});
