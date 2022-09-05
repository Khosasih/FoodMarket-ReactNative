import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {getData} from '../../../utils';

const HomeProfile = () => {
  const [photo, setPhoto] = useState();
  //cara jika mau get nama
  const [name, setName] = useState('defaultnya');
  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('user Profile: ', res);
      setPhoto({uri: res.profile_photo_url});
      //tambahkan ini untuk get nama
      setName(res.name);
    });
  }, []);
  return (
    <View style={styles.profileContainer}>
      <View>
        {/* dan ini tambahkan */}
        {/* <Text style={styles.catering}>{name}</Text> */}
        <Text style={styles.catering}>Catering UMI</Text>

        <Text style={styles.subCatering}>Yuk Order Sekarang! {name}</Text>
      </View>
      <Image source={photo} style={styles.profile}/>
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
