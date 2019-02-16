import { Constants  } from 'expo';
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import Header from '../Header';

class HomeHeader extends Component {
  render() {
    return (
      <Header style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
  },
  logo: {
    height: 30
  },
});

export default HomeHeader;