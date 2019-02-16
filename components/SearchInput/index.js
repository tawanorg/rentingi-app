import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

export default class SearchInput extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <TouchableOpacity style={[styles.container, style]}>
        <Icon.FontAwesome
          name="search"
          size={18}
          color={`#C9C9C9`}
          style={{
            marginLeft: 10,
          }}
        />
        <Text style={styles.searchInput}>
          Search for your stay
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    padding: 10,
  },
  searchInput: {
    paddingLeft: 10,
    color: '#CCC'
  },
});
