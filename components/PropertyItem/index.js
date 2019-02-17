import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';

function PropertyItem({ style }) {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Image 
        style={styles.image} source={require('../../assets/images/property.jpeg')}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Abbotsford, Melbourne</Text>
        <Text style={styles.subtitle}>Furnished room in a share house</Text>
        <Text style={styles.desc}>Spacious house located in quite area. Close to Flinders University and Marion Shopping Centre.</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderColor: '#E9E9E9',
    backgroundColor: '#F1F1F1',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 250,
  },
  content: {
    padding: 10
  },
  title: {
    fontSize: 18,
    fontFamily: 'RubikMedium',
    color: '#444'
  },
  subtitle: {},
  desc: {}
});

export default PropertyItem;