import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, FoodList, Header, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderSummary = ({marginTop, navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Header
          title={'Pembayaran'}
          subTitle={'Ayo selesaikan pembayaran-mu'}
          iconBack={() => {}}
        />
        <View style={styles.container}>
          <Text style={styles.title()}>Pesanan</Text>
          <FoodList
            image={FoodDummy1}
            title={'Nasi Kuning'}
            price={'50.000'}
            type="order-summary"
            items={14}
          />
          <Text style={styles.title((marginTop = 18))}>
            Details Transaction
          </Text>
          <ItemValue text={'Nasi Kuning'} value={'IDR 50.0000'} />
          <ItemValue text={'Driver'} value={'IDR 25.000'} />
          <ItemValue text={'PPN 11%'} value={'IDR 11.000'} />
          <ItemValue
            text={'Total Price'}
            value={'IDR 85.0000'}
            color={'#1ABC9C'}
            fontFamily={'Poppins-Medium'}
          />
        </View>
        <View style={styles.container}>
          <Text>Deliver To:</Text>
          <ItemValue text={'Nama'} value={'Adam Maulana Khosasih'} />
          <ItemValue text={'Phone No.'} value={'083804407372'} />
          <ItemValue text={'House No.'} value={'3'} />
          <ItemValue text={'City'} value={'Jakarta Selatan'} />
        </View>
        <View style={styles.klik}>
          <Button text={'Bayar Sekarang'} onPress={()=> navigation.replace('SuccessOrder')}/>
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
