import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ProfileDummy } from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.catering}>Catering UMI</Text>
        <Text style={styles.subCatering}>Yuk Order Sekarang!</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    paddingBottom: 32,
    paddingTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  catering: {
    fontSize: 22,
    fontFamily: 'Poppins-medium',
    color: '#020202',
  },
  subCatering: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
});
