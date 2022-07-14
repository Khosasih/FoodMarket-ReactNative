import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from '../../utils';

const SignUp = ({navigation}) => {
  // const globalState = useSelector((state) => state.globalReducer);
  // console.log('globalState:', globalState);
  const [form, setFrom] = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form:', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header
          title={'SignUp'}
          subTitle={'Daftar Sekarang'}
          iconBack={() => {}}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
          <TextInput
            label={'Nama Lengkap'}
            placeholder={'Nama Lengkap'}
            value={form.name}
            onChangeText={value => setFrom('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Email Address'}
            placeholder={'Email Address'}
            value={form.email}
            onChangeText={value => setFrom('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Password'}
            placeholder={'password'}
            value={form.password}
            onChangeText={value => setFrom('password', value)}
            secureTextEntry
          />
          <Gap height={16} />
          <TextInput
            label={'Password Confirmation'}
            placeholder={'password confirmation'}
            value={form.password_confirmation}
            onChangeText={value => setFrom('password_confirmation', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button text={'Lanjutkan'} onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
  addPhoto: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  photoContainer: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  borderPhoto: {
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 110,
    height: 110,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
