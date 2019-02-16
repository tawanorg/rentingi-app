import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { MapView } from 'expo';
import SearchHeader from '../components/SearchHeader';
import MapController from '../components/MapController';
 
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: props => <SearchHeader {...props} />,
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <MapController />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFE',
  },
});
