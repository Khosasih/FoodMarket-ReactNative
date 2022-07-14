import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlsuccessSignup} from '../../assets';
import {Button, Gap} from '../../components';

const SignUpSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlsuccessSignup/>
      <Gap height={30} />
      <Text style={styles.title}>Daftar Berhasil !</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Silahkan Untuk Pesan CateringUMI</Text>
      <Text style={styles.subTitle}>Bismillah</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button text={'Pesan Sekarang'} onPress={() => navigation.replace('MainApp')}/>
      </View>
    </View>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Popping-Light',
    color: '#8D92A3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
