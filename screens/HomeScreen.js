import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchInput from '../components/SearchInput';
import SectionHeader from '../components/SectionHeader';
import PropertyItem from '../components/PropertyItem';
// import SaveSearchItem from '../components/SaveSearchItem';
import PeopleList from '../components/PeopleList';
import Colors from '../constants/Colors';

var faker = require('faker');

const DATA = Array.from({ length: 20 }).map((_, i) => i);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <HomeHeader />,
  };
 
  render() {
    return (
      <View
        style={styles.container}
      >
        <View
          style={{
            borderBottomWidth: .5,
            borderColor: Colors.borderColor,
          }}
        >
          <SearchInput
            style={{
              margin: 10,
            }}
          />
        </View>
        <ScrollView>
          <SectionHeader
            title={'Stay connected'}
            subtitle={'People you\'re connected with'}
            style={{
              borderTopWidth: 0,
            }}
          >
            <PeopleList />
          </SectionHeader>
          <SectionHeader
            title={'Perfect matches'}
            subtitle={`${DATA.length} houses matches your searches`}
            style={{
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
          />
          {
            DATA.map(property => (
              <PropertyItem 
                key={property}
                style={{ marginBottom: 10}}
                photoUrl={`https://loremflickr.com/320/240/house`}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});
