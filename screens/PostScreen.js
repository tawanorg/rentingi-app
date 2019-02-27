import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import PostHomeHeader from '../components/PostHomeHeader';
import PostHeader from '../components/PostHeader';
import PostSection from '../components/PostSection';
import Colors from '../constants/Colors';
// import Colors from '../constants/Colors';

export default class PostScreen extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <PostHomeHeader
        navigation={navigation}
      />
    )
  }; 

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
        <View style={{ marginTop: 20, marginHorizontal: 25 }}>
          <PostHeader
            title={`Get ready to share your house`}
            subtitle={`Start by creating your listing. It's like a profile page for your place`}
          />
          <Text style={{ color: Colors.secondary, marginTop: 5 }}>
            Property ID: RENTINGI8749KBA
          </Text>
          <PostSection
            step={'1'}
            title={`Start with the basics`}
            subtitle={`Location, property detail and facilities`}
            onPress={() => this.props.navigation.navigate('PostStepOne')}
            isDone
            style={{
              marginTop: 20,
            }}
          />
          <PostSection
            step={'2'}
            title={`Set the price`}
            subtitle={`Beds, bathroom, price, and more`}
            onPress={() => this.props.navigation.navigate('PostStepTwo')}
            isDone
            style={{
              marginTop: 20
            }}
          />
          <PostSection
            step={'3'}
            title={`Set the scene`}
            subtitle={`Photos, short description, title`}
            onPress={() => this.props.navigation.navigate('PostStepThree')}
            isDone={false}
            style={{
              marginTop: 20
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  contentContainerStyle: {
    padding: 10,
  },
});