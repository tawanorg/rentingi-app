import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'expo';
import SearchInput from '../SearchInput';
import Header from '../Header';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Private room with shared bath, 170$ per week ' };
  }

  render() {
    return (
      <View>
        <Header style={styles.headerContainer}>
          <SearchInput style={{ flex: 1 }} />
          <TouchableOpacity onPress={() => null} style={styles.searchFilterButton}>
            <Icon.AntDesign
              name="filter"
              color="#333"
              size={24}
            />
          </TouchableOpacity>
        </Header>
        <View style={styles.searchResultContainer}>
          <Text style={styles.searchResultText}>{this.state.text}</Text>
          <TouchableOpacity>
            <Text style={styles.searchSaveButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  searchFilterButton: {
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 35 / 2,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginLeft: 5
  },
  searchResultContainer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchResultText: {
    color: '#777777'
  },
  searchSaveButton: {
    color: '#333',
    fontFamily: 'RubikMedium',
  }
})

export default SearchHeader;