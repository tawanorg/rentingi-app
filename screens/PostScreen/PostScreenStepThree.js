import React from 'react';
import { ScrollView, View, Text, StyleSheet, Slider } from 'react-native';
import PostHeader from '../../components/PostHeader';
import PostHomeHeader from '../../components/PostHomeHeader';
import Colors from '../../constants/Colors';

export default class PostScreenStepThree extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <PostHomeHeader navigation={navigation} />
    )
  }; 
 
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
        <PostHeader title={`Set the scene`} />
        <View>
          <PostHeader subtitle={`What type of property is this?`} />
          <View style={{ marginVertical: 10, flexDirection: 'row', flexWrap: 'wrap'  }}>
            
          </View>
        </View>
      </ScrollView>
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
    marginTop: 10, 
    marginHorizontal: 25,
  },
});