import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../assets';
import ProfileTab from '../../components/molecules/ProfileTab';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContrainer} />
          </View>
        </View>
        <Text style={styles.name}>Adam Maulana</Text>
        <Text style={styles.email}>adammaulanakh1@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTab />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileContainer: {
    backgroundColor: 'white',
    paddingBottom: 26,
  },
  content: {
    marginTop: 24,
    flex: 1,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  photoContrainer: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  borderPhoto: {
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 110,
    height: 110,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
