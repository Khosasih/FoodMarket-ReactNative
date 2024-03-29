import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputEmail,
} from 'react-native';
import React from 'react';

const TextInput = ({label,placeholder,error,keyboardType,maxLength,...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputEmail style={styles.input} placeholder={placeholder} {...restProps} keyboardType={keyboardType} maxLength={maxLength}/>
      {error ? <Text>{error}</Text> : null} 
      {/* ini logic untuk panggil errornya*/}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {borderWidth: 1, borderColor: '#020202', borderRadius: 8, padding: 10},
});
