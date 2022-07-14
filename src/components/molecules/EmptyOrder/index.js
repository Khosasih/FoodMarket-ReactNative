import { useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlemptyOrder} from '../../../assets';
import {Button, Gap} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IlemptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Kosong!!</Text>
      <Gap height={6}/>
      <Text style={styles.subtitle}>Ayoo!! Pesan sekarang!</Text>
      <Gap height={30} />
      <View style={styles.klik}>
        <Button
          text={'Cari Makan'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  klik: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
