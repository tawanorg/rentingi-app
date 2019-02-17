import { Constants  } from 'expo';
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../Header';
import { getStatusBarHeight } from '../../utils/helper';

class HomeHeader extends Component {
  render() {
    return (
      <Header style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <TouchableOpacity style={[styles.accountLevelBadge, styles.paidAccount]}>
          <Text style={styles.accountLevelText}>Premium</Text>
        </TouchableOpacity>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
    position: 'relative'
  },
  logo: {
    height: 30
  },
  accountLevelBadge: {
    position: 'absolute',
    right: 10,
    bottom: 15,
    backgroundColor: '#E9E9E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10
  },
  accountLevelText: {
    color: '#555',
    fontSize: 10
  },
  paidAccount: {
    backgroundColor: '#FECB28',
  }
});

export default HomeHeader;