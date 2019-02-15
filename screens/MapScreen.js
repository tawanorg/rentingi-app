import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MapView } from 'expo';
import { Icon } from 'expo';
import SearchHeader from '../components/SearchHeader';
 
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: props => <SearchHeader {...props} />,
    headerTintColor: 'royalblue',
    headerStyle: {
      backgroundColor: 'transparent'
    },
    animationEnabled: true
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => null} style={styles.button}>
            <Text style={styles.searchAreaButton}>SEARCH THIS AREA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.locationButtonContainer}>
          <TouchableOpacity onPress={() => null} style={styles.buttonCircle}>
            <Icon.FontAwesome
              name="location-arrow"
              color="#4E78EE"
              style={{
                position: 'absolute',
                top: 6,
                button: 0,
                left: 9,
                right: 0,
              }}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const buttonStyle = {
  borderRadius: 30,
  backgroundColor: '#FFFDFE',
  borderWidth: 1,
  borderColor: '#EAEAEA',
  borderStyle: 'solid',
  paddingHorizontal: 20,
  paddingVertical: 10,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFE',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: buttonStyle,
  locationButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonCircle: {
    ...buttonStyle,
    borderRadius: 38 / 2,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  searchAreaButton: {
    fontFamily: 'RubikMedium',
  }
});
