// @flow strict

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function PostHeader({ title, subtitle, style }) {
  return (
    <View style={[styles.container, style]}>
      { title && <Text style={styles.title}>{title}</Text>}
      { subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontFamily: 'MainMedium',
    fontSize: 32,
    color: Colors.tintColor,
  },
  subtitle: {
    fontFamily: 'Main',
    fontSize: 18,
    color: Colors.tintColor,
    marginTop: 10
  }
});

export default PostHeader;