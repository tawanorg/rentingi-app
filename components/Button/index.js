import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as React from 'react';
import Colors from '../../constants/Colors';

function Button({ children, onPress, disabled, style }) {
  return (
    <TouchableOpacity style={[styles.button, style, disabled && styles.buttonDisabled]} onPress={onPress}>
      <Text style={[styles.buttonLabel, { fontSize: 15 }]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonDisabled: {
    opacity: 0.4
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.highlight,
    borderRadius: 30
  },
  buttonLabel: {
    color: '#FFF',
    fontFamily: 'MainMedium',
    fontSize: 20,
  },
});


export default Button;