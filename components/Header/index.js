import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';

const Header = ({ style, children }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
    height: Constants.statusBarHeight * 2,
  },
  label: {
    fontFamily: 'RubikMedium',
    fontSize: 20,
  },
});

export default Header;