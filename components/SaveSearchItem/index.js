import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Icon } from 'expo';

function SaveSearchItem({ noborder }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => null}>
      <View style={[styles.titleContainer, noborder && styles.noborder]}>
        <View>
          <Text>Private room with shared bathroom $170 / week</Text>
          <Text>Abbotsford VIC, Melbourne CBD</Text>
        </View>
        <Icon.FontAwesome
        name="search"
        color="#333"
        size={18}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  noborder: {
    borderBottomWidth: 0,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderColor: '#E9E9E9',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },
})

export default SaveSearchItem;