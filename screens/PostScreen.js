import React from 'react';
import { Picker, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import PostHeader from '../components/PostHeader';
import PostSection from '../components/PostSection';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

export default class PostScreen extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.Feather
            name="chevron-left"
            color={Colors.tintColor}
            size={32}
          />
        </TouchableOpacity>
      </Header>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <View style={{ marginTop: 20, marginHorizontal: 25 }}>
            <PostHeader
              title={`Get ready to share your house`}
              subtitle={`Start by creating your listing. It's like a profile page for your place`}
            />
            <PostSection
              step={'1'}
              title={`Start with the basics`}
              subtitle={`Location, housemates and more`}
              isDone={true}
              style={{
                marginTop: 20,
              }}
            />
            <PostSection
              step={'2'}
              title={`Set the price`}
              subtitle={`Beds, bathroom, facilities, and more`}
              isDone={false}
              style={{
                marginTop: 20
              }}
            />
            <PostSection
              step={'3'}
              title={`Set the scene`}
              subtitle={`Photos, short description, title`}
              isDone={false}
              style={{
                marginTop: 20
              }}
            />
          </View>
        </ScrollView>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>NEXT</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }

  renderViewForStepOne() {
    return (
      <View>
        <PostHeader
          title={`Let's get you ready to become a host`}
          subtitle={`Start with the basics`}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.questionTitle}>What type of property is this?</Text>
          <Picker mode="dropdown">
            <Picker.Item label="House" value="java" />
            <Picker.Item label="Apartment" value="js" />
            <Picker.Item label="Townhouse" value="js" />
          </Picker>
        </View>
        <View>
          <Text style={styles.questionTitle}>What will housemates have?</Text>
          <Picker>
            <Picker.Item label="Private room" value="java" />
            <Picker.Item label="Entrie place" value="js" />
            <Picker.Item label="Shared room" value="js" />
          </Picker>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  contentContainerStyle: {
    padding: 10,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
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
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  questionTitle: {
    color: Colors.tintColor,
    fontFamily: 'Main',
    fontSize: 16,
  }
});