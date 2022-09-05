import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, FoodList, Header, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderSummary = ({marginTop, navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Header
          title={'Pembayaran'}
          subTitle={'Ayo selesaikan pembayaran-mu'}
          iconBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <Text style={styles.title()}>Pesanan</Text>
          <FoodList
            image={{uri: item.picturePath}}
            title={item.name}
            price={item.price}
            type="order-summary"
            items={transaction.totalItems}
          />
          <Text style={styles.title((marginTop = 18))}>
            Details Transaction
          </Text>
          <ItemValue
            text={item.name}
            value={transaction.totalPrice}
            type="currency"
          />
          <ItemValue
            text={'Driver'}
            value={transaction.driver}
            type="currency"
          />
          <ItemValue text={'PPN 11%'} value={transaction.tax} type="currency" />
          <ItemValue
            text={'Total Price'}
            value={transaction.total}
            color={'#1ABC9C'}
            fontFamily={'Poppins-Medium'}
            type="currency"
          />
        </View>
        <View style={styles.container}>
          <Text>Deliver To:</Text>
          <ItemValue text={'Nama'} value={userProfile.name} />
          <ItemValue text={'Phone No.'} value={userProfile.phoneNumber} />
          <ItemValue text={'House No.'} value={userProfile.houseNumber} />
          <ItemValue text={'City'} value={userProfile.city} />
        </View>
        <View style={styles.klik}>
          <Button
            text={'Bayar Sekarang'}
            onPress={() => navigation.replace('SuccessOrder')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  title: marginTop => ({
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 18,
    marginTop: marginTop,
  }),
  klik: {
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 26,
  },
});
