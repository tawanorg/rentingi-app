import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

export default class SearchInput extends React.Component {
  render() {
    const { style, type, value } = this.props;
    const Container = type === 'input' ? View : TouchableOpacity

    return (
      <Container style={[styles.container, style]}>
        <Icon.FontAwesome
          name="search"
          size={18}
          color={`#C9C9C9`}
          style={{
            marginLeft: 10,
          }}
        />
        {type === 'input' ? (
          <TextInput 
            value={value} 
            placeholder="Search for your messages" 
            style={[styles.searchInput, { color: '#333333' }]}
            placeholderTextColor={'#CCCCCC'}
          />
        ) : (
          <Text style={styles.searchInput}>
            Search for your stay
          </Text>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 3,
  },
  searchInput: {
    color: '#CCC',
    flex: 1,
    marginHorizontal: 10,
  },
});
