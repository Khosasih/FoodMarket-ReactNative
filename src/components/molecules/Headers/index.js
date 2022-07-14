import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({title, subTitle, iconBack}) => {
  return (
    <View style={styles.container}>
      {iconBack && (
        <TouchableOpacity activeOpacity={0.1}>
          <View style={styles.iconBack}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  iconBack: {padding: 16, marginRight: 16, marginLeft: -10},
});
