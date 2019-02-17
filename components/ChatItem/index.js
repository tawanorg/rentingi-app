import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const text = 'Could I do inspection anytime soon? hello? hello there';

const ChatItem = ({ id, avatarUrl, name, message, when, style, isNew, onPress }) => (
  <TouchableOpacity style={[styles.chatItemContainer, style, isNew && styles.markAsRead]} onPress={onPress}>
    <Image style={styles.chatAvatarImage} source={{ uri: avatarUrl }} />
    <View style={styles.chatMessageContainer}>
      <Text style={styles.chatSenderTitle}>{name}</Text>
      <View style={styles.messageContent}>
        <Text numberOfLines={1} style={styles.chatMessage}>
          {message}
        </Text>
        {isNew && (
          <View style={styles.buble} />
        )}
      </View>
      <Text style={styles.chatTime}>{when}</Text>
    </View>
  </TouchableOpacity>
)

// require('../../assets/images/avatar.png')

const styles = StyleSheet.create({
  chatItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  messageContent: {
    position: 'relative'
  },
  buble: {
    position: 'absolute',
    backgroundColor: '#FF0000',
    width: 10,
    height: 10,
    top: 4,
    right: -10,
    borderRadius: 10 / 2,
  },
  markAsRead: {
    backgroundColor: '#F1F1F1',
  },
  chatAvatarImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2
  },
  chatMessageContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  chatSenderTitle: {
    fontSize: 14,
    fontFamily: 'RubikMedium',
    color: '#444',
    marginBottom: 5,
  },
  chatMessage: {
    color: '#777777',
  },
  chatTime: {
    fontSize: 10,
    color: '#AAA',
    marginTop: 10,
  },
});

export default ChatItem;