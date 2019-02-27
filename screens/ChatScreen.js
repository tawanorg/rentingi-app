// @flow

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import ChatItem from '../components/ChatItem';
import SectionHeader from '../components/SectionHeader';
import PeopleList from '../components/PeopleList';
import Colors from '../constants/Colors';

var faker = require('faker');

const DATA = Array.from({ length: 50 }).map((_, i) => ({
  id: `item_${i}`,
  avatarUrl: faker.fake("{{internet.avatar}}"),
  name: faker.fake("{{name.firstName}} {{name.lastName}}"),
  lastMessage: faker.fake("{{lorem.sentence}}"),
  time: new Date().toTimeString(),
  isNew: [1, 3, 5, 6].includes(i),
}));

export default class ChatScreen extends React.PureComponent {
  static navigationOptions = {
    header: () => (
      <Header>
        <SearchInput
          type="input"
          style={{ flex: 1 }}
        />
      </Header>
    ),
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <ChatItem
      isNew={item.isNew}
      id={item.id}
      onPress={() => this.props.navigation.push('ChatRoom', {
        component: {
          name: 'NEXT_PAGE',
          options: {
            bottomTabs: {
              visible: false, 
              animate: false
            }
          }
        },
        name: item.name
      })}
      avatarUrl={item.avatarUrl}
      name={item.name}
      message={item.lastMessage}
      when={item.time}
      style={styles.chatItem}
    />
  );

  render() {
    return (
      <FlatList
        style={styles.container}
        data={DATA}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatItem: {
    padding: 10,
  },
  chatListContainer: {
    flexDirection: 'column'
  },
  chatHeaderTitle: {
    fontFamily: 'MainMedium',
    color: Colors.tintColor,
    fontSize: 18,
    marginBottom: 5
  },
  chatHeaderSubtitle: {
    color: Colors.secondary,
    fontSize: 14,
  }
});
