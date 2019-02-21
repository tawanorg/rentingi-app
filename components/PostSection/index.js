// @flow strict

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Icon } from 'expo';

function PostSection({ step, title, subtitle, style, isDone }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <Text style={styles.step}>STEP {step}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {
          isDone ? (
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          ) : 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Continue</Text>
          </TouchableOpacity>
        }
      </View>
      {
        isDone && 
        (
          <View style={styles.doneButton}>
            <Icon.Feather
              name="check"
              size={26}
              color={`#FFF`}
            />
          </View>
        )
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    paddingVertical: 20,
    // borderBottomWidth: .5,
    borderTopWidth: .5,
    borderColor: Colors.borderColor,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  step: {
    color: Colors.tabIconDefault,
    fontSize: 13,
  },
  title: {
    fontFamily: 'Main',
    fontSize: 18,
    color: Colors.tintColor,
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: 'Main',
    fontSize: 14,
  },
  button: {
    marginTop: 10,
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
    fontSize: 15,
  },
  changeText: {
    fontFamily: 'MainMedium',
    color: Colors.highlight,
    fontSize: 16,
    paddingTop: 10
  },
  doneButton: {
    backgroundColor: Colors.highlight,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostSection;