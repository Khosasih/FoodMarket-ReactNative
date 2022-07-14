import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, FoodList, Header, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderDetail = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Header
          iconBack={'ic-ArrowBack'}
          title={'Payment'}
          subTitle={'Detail Pesanan'}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Item Pesanan</Text>
          <FoodList
            image={FoodDummy1}
            title={'Nasi Mandi'}
            price={'IDR 25.000'}
            type="order-summary"
            items={12}
          />
          <Text style={styles.second}>Detail Transaction</Text>
          <ItemValue text={'Nasi Mandi'} value={'IDR 25.000'} />
          <ItemValue text={'Driver'} value={'IDR 10.000'} />
          <ItemValue text={'PPN 11%'} value={'IDR 11.000'} />
          <ItemValue
            text={'Total'}
            value={'IDR 46.000'}
            color={'#1ABC9C'}
            fontFamily={'Poppins-Medium'}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Deliver To:</Text>
          <ItemValue text={'Name'} value={'Adam'} />
          <ItemValue text={'Phone No'} value={'083804407372'} />
          <ItemValue text={'Address'} value={'Komando 3'} />
          <ItemValue text={'House No'} value={'03'} />
          <ItemValue text={'City'} value={'Jakarta Selatan'} />
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.title}>Order Status</Text>
          <View style={styles.status}>
            <Text style={styles.code}>#FM20220615</Text>
            <Text style={styles.pay}>Paid</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <Button
            text={'Cancle Order'}
            textColor={'white'}
            color={'#D9435E'}
            onPress={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 12,
  },
  second: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginVertical: 8,
  },
  containerContent: {
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  containerButton: {
    marginTop: 24,
    marginBottom: 26,
    paddingHorizontal: 24,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  code: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  pay: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#1ABC9C',
  },
});
