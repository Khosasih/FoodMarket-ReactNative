import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {setLoading, signInAction} from '../../redux/action';
import {getData, useForm} from '../../utils';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [form, setFrom] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(setLoading(true));
    dispatch(signInAction(form, navigation));
    // 'karna sudah pakai form/Hook maka menjadi..'
    // console.log('email: ', email);
    // console.log('password: ', password);
    console.log('form: ', form);
  };
  return (
    <View style={styles.page}>
      <Header title="Masuk" subTitle="Langsung Order, Gak Pake Repott!" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Masukan Email Anda"
          // value={email} 'karna sudah pakai form/Hook maka menjadi..'
          value={form.email}
          // onChangeText={value => setEmail(value)} 'karna sudah pakai form/Hook maka menjadi..'
          onChangeText={value => setFrom('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Masukan Password Anda"
          value={form.password}
          onChangeText={value => setFrom('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Masuk" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          text="Daftar"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
