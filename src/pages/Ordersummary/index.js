import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, FoodList, Header, ItemValue, Loading} from '../../components';
import {FoodDummy1} from '../../assets';
import Axios from 'axios';
import {API_HOST} from '../../config';
import {useEffect} from 'react';
import {getData} from '../../utils';
import {useState} from 'react';
import {WebView} from 'react-native-webview';

const OrderSummary = ({marginTop, navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');
  useEffect(() => {
    getData('token').then(res => {
      console.log('token: ', res);
      setToken(res.value);
    });
  }, []);
  const onPay = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItems,
      total: transaction.total,
      status: 'PENDING',
    };
    Axios.post(`${API_HOST.url}/checkout`, data, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => {
        console.log('Checkout success: ', res.data);
        setIsPaymentOpen(true);
        setPaymentURL(res.data.data.payment_url);
      })
      .catch(err => {
        console.log('Checkout error: ', err);
      });
  };
  const onNavChange = state => {
    console.log('nav : ', state);
    // const urlSuccess = 'masukin url dari nav'
    const titleWeb = "Pembayaran Anda Berhasil!"
    if (state.title === titleWeb) {
      navigation.replace('SuccessOrder');
    }
  };
  if (isPaymentOpen) {
    return (
      <>
        <Header
          title={'Payment'}
          subTitle={'Silahkan untuk melakukan pembayaran'}
          iconBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Header
          title={'Order Summary'}
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
            // onPress={() => navigation.replace('SuccessOrder')}
            onPress={onPay}
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
