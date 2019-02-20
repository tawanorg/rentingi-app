// @flow

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { Icon } from 'expo';
import { GiftedChat } from 'react-native-gifted-chat'
import Colors from '../constants/Colors';

export default class ChatScreen extends React.PureComponent {
  state = {
    messages: [],
  }

  static navigationOptions = {
    header: ({ navigation }) => (
      <Header style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Icon.Feather
            name="chevron-left"
            color={Colors.tintColor}
            size={32}
          />
        </TouchableOpacity>
        <View style={styles.chatTitleContainer}>
          <Text style={styles.chatTitle}>
            {navigation.getParam('name', 'Tim Tawan')}
          </Text>
          <Icon.Octicons
            name="verified"
            color={Colors.success}
            size={22}
          />
        </View>
        <View style={styles.controller}>
          <TouchableOpacity onPress={() => null} style={{ marginRight: 20 }}>
            <Icon.Feather
              name="phone"
              color={Colors.tintColor}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null}>
            <Icon.Feather
              name="info"
              color={Colors.tintColor}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </Header>
    ),
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
 
  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  chatTitle: {
    fontFamily: 'MainMedium',
    fontSize: 16,
    marginHorizontal: 10,
  },
  chatTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  controller: {
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
  }
});
