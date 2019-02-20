import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../Header';
import Colors from '../../constants/Colors';

class HomeHeader extends Component {
  render() {
    return (
      <Header style={styles.container}>
        <Image
          source={require('../../assets/images/logo-v1.png')}
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
    borderBottomWidth: .5,
    borderColor: Colors.borderColor,
    position: 'relative'
  },
  logo: {
    height: 30
  },
  accountLevelBadge: {
    position: 'absolute',
    right: 10,
    bottom: 15,
    backgroundColor: Colors.backgroundColorBold,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10
  },
  accountLevelText: {
    color: '#FFF',
    fontSize: 10
  },
  paidAccount: {
    backgroundColor: Colors.joke,
  }
});

export default HomeHeader;