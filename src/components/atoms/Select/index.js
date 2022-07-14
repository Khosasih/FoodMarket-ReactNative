import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) =>
            onSelectChange(itemValue)
          }>
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Medan" value="Medan" />
          <Picker.Item label="Semarang" value="Semarang" />
          <Picker.Item label="Jogja" value="Jogja" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 2,
    padding: 0,
  },
});
