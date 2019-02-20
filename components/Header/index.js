import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getStatusBarHeight } from '../../utils/helper';
import Colors from '../../constants/Colors';

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
    borderBottomWidth: .5,
    borderColor: Colors.borderColor,
    height: getStatusBarHeight() + 55,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'MainMedium',
    fontSize: 20,
  },
});

export default Header;