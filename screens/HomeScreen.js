import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchInput from '../components/SearchInput';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <HomeHeader />,
  };

  render() {
    return (
      <View styles={styles.container}>
        <SearchInput style={{ margin: 5 }} />
        <ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    backgroundColor: '#fff',
  },
});
