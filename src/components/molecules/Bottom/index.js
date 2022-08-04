import React from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import {
  IconHomeOff,
  IconHomeOn,
  IconOrderOff,
  IconOrderOn,
  IconProfileOff,
  IconProfileOn,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IconHomeOn /> : <IconHomeOff />;
    case 'Order':
      return focus ? <IconOrderOn /> : <IconOrderOff />;
    case 'Profile':
      return focus ? <IconProfileOn /> : <IconProfileOff />;
    default:
      return <IconOrderOn />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container} >
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FF4500',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    bottom: 20,
    borderRadius: 20,
    shadowColor: '#020202',
    shadowOpacity: 0.07,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
});
