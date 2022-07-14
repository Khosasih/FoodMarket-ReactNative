import Axios from 'axios';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage, hideMessage} from 'react-native-flash-message';

const AddressPage = ({navigation}) => {
  const [form, setFrom] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Jakarta',
  });
  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer);
  const onSubmit = () => {
    console.log('form:', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('Data Register:', data);
    dispatch({type: 'SET_LOADING', value: true});
    Axios.post('http://192.168.0.140:8000/api/register', data)
      .then(res => {
        console.log('Data Success:', res.data);
        dispatch({type: 'SET_LOADING', value: false});
        showToast('Registrasi Berhasil', 'success');
        navigation.replace('SignUpSuccess');
      })
      .catch(err => {
        console.log('Sign Up Error:', err.response);
        dispatch({type: 'SET_LOADING', value: false});
        showToast('Error');
      });
  };
  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'succes' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    });
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header
          title={'Alamat'}
          subTitle={'Masukan Alamat Tinggal Anda'}
          iconBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label={'Nomor Telepon'}
            placeholder={'0838*****'}
            value={form.phoneNumber}
            onChangeText={value => setFrom('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Alamat'}
            placeholder={'Alamat'}
            value={form.address}
            onChangeText={value => setFrom('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Nomor Rumah'}
            placeholder={'No. 37'}
            value={form.houseNumber}
            onChangeText={value => setFrom('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label={'Kota'}
            value={form.city}
            onSelectChange={value => setFrom('city', value)}
          />
          <Gap height={24} />
          <Button text={'Daftar'} onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddressPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
