import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage, useForm} from '../../utils';
import * as ImagePicker from 'react-native-image-picker';
import {useState} from 'react';

const SignUp = ({navigation}) => {
  // const globalState = useSelector((state) => state.globalReducer);
  // console.log('globalState:', globalState);
  const [form, setFrom] = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();

  const AddPhoto = () => {
    ImagePicker.launchImageLibrary(
      {
        quality: 0.5,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log('Response = ', response);
        if (response.didCancel || response.error) {
          // console.log('Anda tidak memilih foto');
          showMessage('Anda tidak memilih foto');
        } else {
          const source = {uri: ''};
          showMessage('Anda berhasil memilih foto', 'succes');
          const temp = {
            uri: '',
            type: '',
            fileName: '',
          };
          response.assets.map(asset => {
            source.uri = asset.uri;
            temp.uri = asset.uri;
            temp.type = asset.type;
            temp.fileName = asset.fileName;
          });

          setPhoto(source);
        }
      },
    );
  };

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
          <View style={styles.photoStyle}>
            <TouchableOpacity onPress={AddPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add {'\n'} Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
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
  photoStyle: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
