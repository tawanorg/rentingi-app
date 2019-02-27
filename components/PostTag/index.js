import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
import Colors from '../../constants/Colors';

const PostTag = ({ name, selected, style }) => {
  return (
    <TouchableOpacity style={[styles.container, selected && styles.selected, style]}>
      <Text style={[styles.title, selected && styles.selectedText]}>{name}</Text>
      <Icon.Ionicons
        name={selected ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline'}
        size={26}
        color={selected ? Colors.highlight : Colors.tabIconDefault}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.backgroundColor,
    position: 'relative'
  },
  selected: {
    borderColor: Colors.highlight,
    backgroundColor: Colors.backgroundColorBold,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Main',
    color: Colors.tintColor,
  },
  selectedText: {
    color: Colors.highlight,
  },
  icon: {
    position: 'absolute',
    top: -0.5,
    right: 1,
  }
})

export default PostTag;