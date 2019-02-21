import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function SectionHeader({ style, layout, title, subtitle, children }) {
  return (
    <View style={[styles.container, styles[layout], style]}>
      <Text style={styles.title}>{title}</Text>
      { subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
};

SectionHeader.propTypes = {
  layout: PropTypes.string,
}

SectionHeader.defaultProps = {
  layout: 'primary',
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10
  },
  primary: {
    borderBottomWidth: .5,
    borderTopWidth: .5,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'column',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'MainMedium',
    color: Colors.tintColor,
    lineHeight: 18,
  },
  subtitle: {
    paddingHorizontal: 10,
    fontSize: 13,
    color: Colors.secondary,
  }
});

export default SectionHeader;