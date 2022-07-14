import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlsuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IlsuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>Pemesanan Berhasil!</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Pesanan akan segera sampai!</Text>
      <Gap height={30} />
      <View style={styles.klik}>
        <Button
          text={'Pesan yang lain'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={12} />
      <View style={styles.klik}>
        <Button
          text={'Lihat pesanan'}
          textColor={'#F9FAFF'}
          color={'#8D92A3'}
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#020202',
  },
  subtitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  klik: {
    width: '85%',
    paddingHorizontal: 80,
  },
});
