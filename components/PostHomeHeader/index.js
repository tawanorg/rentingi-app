import React from 'react';
import { Icon } from 'expo';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Header from '../Header'
import Button from '../Button';
import Colors from '../../constants/Colors';

const PostHomeHeader = ({ navigation, ready }) => {
  return (
    <Header style={styles.container}>
      <TouchableOpacity onPress={() => navigation.dispatch(NavigationActions.back())}>
        <Icon.AntDesign
          name="close"
          color={Colors.tintColor}
          size={24}
        />
      </TouchableOpacity>
      <Button disabled={!ready} onPress={() => ready && navigation.dispatch(NavigationActions.back())}>
        Continue
      </Button>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default PostHomeHeader;