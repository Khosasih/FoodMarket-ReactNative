import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {useForm} from '../../utils';

const AddressPage = ({navigation}) => {
  // const [errorPhone, seterrorPhone] = useState(''); //bikin state untuk error per Form
  const [form, setFrom] = useForm({
    phoneNumber: '+62',
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
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header
          title={'Alamat'}
          subTitle={'Masukan Alamat Tinggal Anda'}
          iconBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label={'Nomor Telepon'}
            placeholder={'0838*****'}
            keyboardType={'numeric'}
            maxLength={13}
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
