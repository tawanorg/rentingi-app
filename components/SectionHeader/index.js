import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function SectionHeader({ style, layout, title, subtitle }) {
  return (
    <View style={[styles.container, styles[layout], style]}>
      <Text style={styles.title}>{title}</Text>
      { subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
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
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  primary: {
    // borderBottomWidth: .5,
    borderTopWidth: .5,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.backgroundColor,
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    fontFamily: 'MainMedium',
    color: Colors.tintColor,
    lineHeight: 18,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.secondary,
  }
});

export default SectionHeader;