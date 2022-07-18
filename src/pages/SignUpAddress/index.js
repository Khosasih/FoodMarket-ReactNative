import Axios from 'axios';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm, showMessage} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const AddressPage = ({navigation}) => {
  // const [errorPhone, seterrorPhone] = useState(''); //bikin state untuk error per Form
  const [form, setFrom] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Jakarta',
  });
  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);
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
        if (photoReducer.isUpload) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          console.log('photoForUpload :', photoReducer);
          Axios.post(
            'http://192.168.0.140:8000/api/user/photo',
            photoForUpload,
            {
              headers: {
                Accept: 'application/json',
                Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                'Content-Type': `multipart/form-data`,
                // accept: 'application/json',
              },
            },
          )
            .then(resUpload => {
              console.log('succes upload: ', resUpload);
            })
            .catch(error => {
              console.log('error upload: ', error.response);
              showMessage('Upload foto tidak berhasil');
            });
        }
        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Registrasi Berhasil', 'succes');
        navigation.replace('SignUpSuccess');
      })
      .catch(err => {
        console.log('Sign Up Error:', err.response);
        dispatch({type: 'SET_LOADING', value: false});
        let errors = Object.values(err?.response?.data?.message);
        console.log('error :', errors);
        let textError = errors.join('\n\n');
        showMessage(textError);
        // seterrorPhone(err.response.data.message.phoneNumber[0]); /ambil setnya dari console error
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
            // error={errorPhone} tinggal panggil
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
