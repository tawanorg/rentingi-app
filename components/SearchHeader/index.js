import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'expo';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Albert Park, VIC, Port Melbourne, VIC' };
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={[styles.searchContainer, { marginRight: 5 }]}>
            <Icon.FontAwesome
              name="search"
              size={18}
              color={`#4E78EE`}
              style={{
                marginLeft: 10,
              }}
            />
            <Text style={styles.searchInput}>{this.state.text}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null} style={[styles.searchFilterButton, { marginRight: 5 }]}>
            <Icon.AntDesign
              name="filter"
              color="#4E78EE"
              size={24}
              style={{
                position: 'absolute',
                top: 6,
                button: 0,
                left: 6,
                right: 0,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchResultContainer}>
          <Text style={styles.searchResultText}>14 results - 170$ per week - private room</Text>
          <TouchableOpacity>
            <Text style={styles.searchSaveButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E1ECF4',
    borderRadius: 4,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Rubik',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16
  },
  searchFilterButton: {
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 35 / 2,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  searchResultContainer: {
    padding: 10,
    borderColor: '#E1ECF4',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchResultText: {
    color: '#777777'
  },
  searchSaveButton: {
    color: '#4E78EE',
    fontFamily: 'RubikMedium',
  }
})

export default SearchHeader;