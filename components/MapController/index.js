import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { Icon } from 'expo';

class MapController extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => null} style={styles.button}>
            <Text style={styles.label}>LIST</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null} style={styles.button}>
            <Text style={styles.label}>SEARCH THIS AREA</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null} style={styles.buttonCircle}>
            <Icon.FontAwesome
              name="location-arrow"
              color="#333"
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  innerContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  label: {
    fontFamily: 'RubikMedium',
  },
  button: buttonStyle,
  buttonCircle: {
    ...buttonStyle,
    borderRadius: 38 / 2,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
});

export default MapController;