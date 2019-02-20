import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { Icon } from 'expo';
import Colors from '../../constants/Colors';

class MapController extends React.Component {
  render() {
    const { onPressSearch, onChangeView, isMap, view, isLoading } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={onChangeView} style={styles.button}>
            <Text style={styles.label}>{view}</Text>
          </TouchableOpacity>
          {
            isMap &&
            <React.Fragment>
              <TouchableOpacity onPress={onPressSearch} style={styles.button}>
                <Text style={styles.label}>SEARCH THIS AREA</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => null} style={styles.buttonCircle}>
                <Icon.FontAwesome
                  name="location-arrow"
                  color="#333"
                  style={{
                    position: 'absolute',
                    top: 6,
                    bottom: 0,
                    left: 9,
                    right: 0,
                  }}
                  size={24}
                />
              </TouchableOpacity>
            </React.Fragment>
          }
        </View>
      </View>
    );
  }
}

const buttonStyle = {
  borderRadius: 30,
  backgroundColor: Colors.backgroundColor,
  borderWidth: .5,
  borderColor: Colors.borderColor,
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
    fontFamily: 'MainMedium',
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