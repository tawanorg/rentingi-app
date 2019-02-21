import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as React from 'react';
import { Icon } from 'expo';
import Colors from '../../constants/Colors';

class MapController extends React.Component {
  render() {
    const { onPressSearch, onChangeView, isMap, view, isLoading } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {
            isMap &&
            <TouchableOpacity onPress={onChangeView} style={styles.left}>
              <ActivityIndicator size="small" color={Colors.highlight} />
            </TouchableOpacity>
          }
          <TouchableOpacity onPress={onChangeView} style={styles.button}>
            <Text style={styles.label}>{view}</Text>
          </TouchableOpacity>
          {isMap &&
            <TouchableOpacity onPress={onPressSearch} style={styles.right}>
              <Icon.FontAwesome
                name="location-arrow"
                color={Colors.highlight}
                size={24}
                />
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  left: {
    position: 'absolute',
    left: 0,
  },
  right: {
    position: 'absolute',
    right: 0,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontFamily: 'MainMedium',
  },
  button: {
    borderRadius: 30,
    backgroundColor: Colors.backgroundColor,
    borderWidth: .5,
    borderColor: Colors.borderColor,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonCircle: {
    paddingHorizontal: 8,
    paddingVertical: 8
  }
});

export default MapController;