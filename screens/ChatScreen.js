import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
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
      <ScrollView 
        styles={styles.container}
        contentContainerStyle={{ padding: 10 }}
      >
      <View>
        <View style={styles.chatItemContainer}>
          <Image style={styles.chatAvatarImage} source={require('../assets/images/avatar.png')} />
          <View style={styles.chatMessageContainer}>
            <Text style={styles.chatSenderTitle}>Tawan</Text>
            <Text style={styles.chatMessage}>Could I do inspection anytime soon?</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  chatAvatarImage: {
    height: 50,
    width: 50,
  },
  chatMessageContainer: {
    paddingLeft: 10,
  },
  chatSenderTitle: {
    fontSize: 14,
    fontFamily: 'RubikMedium',
    color: '#444',
    marginBottom: 5,
  },
  chatMessage: {},
});
