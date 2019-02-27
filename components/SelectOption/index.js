import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'expo';
import PostHeader from '../PostHeader';
import Colors from '../../constants/Colors';

const SelectOption = ({ title, style, number, onPlus, onMinus }) => {
  return (
    <View style={[styles.container, style]}>
      <PostHeader subtitle={title} />
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.button} onPress={onMinus}>
          <Icon.AntDesign
            name="minus"
            color={Colors.tintColor}
            size={24}
          />
        </TouchableOpacity>
        <Text style={styles.number}>{number}</Text>
        <TouchableOpacity style={styles.button} onPress={onPlus}>
          <Icon.AntDesign
            name="plus"
            color={Colors.tintColor}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  number: {
    paddingHorizontal: 20,
    fontSize: 16,
  }
})

export default SelectOption;