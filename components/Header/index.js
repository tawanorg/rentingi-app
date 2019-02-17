import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getStatusBarHeight } from '../../utils/helper';

const Header = ({ style, children }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: getStatusBarHeight() + 8,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
    height: getStatusBarHeight() + 55,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'RubikMedium',
    fontSize: 20,
  },
});

export default Header;