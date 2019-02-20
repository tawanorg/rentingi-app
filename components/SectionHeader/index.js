import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function SectionHeader({ style, layout, title, children }) {
  return (
    <View style={[styles.container, layout && styles[layout], style]}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  primary: {
    borderBottomWidth: .5,
    borderTopWidth: .5,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    fontSize: 13,
    fontFamily: 'MainMedium',
    color: Colors.tintColor,
  }
});

export default SectionHeader;