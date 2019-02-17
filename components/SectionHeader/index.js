import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SectionHeader({ style, layout, title, children }) {
  return (
    <View style={[styles.container, style, layout && styles[layout]]}>
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
  property: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: 13,
    fontFamily: 'RubikMedium',
    color: '#444'
  }
});

export default SectionHeader;