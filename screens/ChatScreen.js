import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    header: () => (
      <Header>
        <SearchInput />
      </Header>
    ),
  };

  render() {
    return (
      <View styles={styles.container}>
        <ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
