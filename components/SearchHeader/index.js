import React from 'react';
import PropTypes from 'prop-types';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'expo';
import SearchInput from '../SearchInput';
import Header from '../Header';
import Colors from '../../constants/Colors';

function SearchHeader({ searching, searchLocation, searchFilters }) {
  return (
    <Header style={styles.headerContainer}>
      {!searching ? <SearchInput style={{ flex: 1 }} /> : (
        <React.Fragment>
          <TouchableOpacity style={styles.searchContainerResult}>
            <Icon.FontAwesome
              name="search"
              size={18}
              color={Colors.highlight}
              style={{
                marginRight: 10,
              }}
            />
            <View style={styles.searchContainer}>
              <Text numberOfLines={1} style={styles.searchLocation}>Melbourne & 3 Locations</Text>
              <View style={styles.searchFilterContainer}>
                <View style={styles.searchItem}>
                  <Text style={styles.searchItemText}>
                    Private Room
                  </Text>
                  <View style={styles.searchItemDot} />
                </View>
                <View style={styles.searchItem}>
                  <Text style={styles.searchItemText}>
                    Shared Bath
                  </Text>
                  <View style={styles.searchItemDot} />
                </View>
                <View style={styles.searchItem}>
                  <Text style={styles.searchItemText}>
                    $140 / W
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null} style={styles.searchFilterButton}>
            <Icon.AntDesign
              name="filter"
              color={Colors.highlight}
              size={24}
            />
          </TouchableOpacity>
        </React.Fragment>
      )}
    </Header>
  );
}; 

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  searchFilterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginLeft: 5
  },
  searchResultContainer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.borderColor,
    borderBottomWidth: .5,
  },
  searchResultText: {
    color: Colors.secondary
  },
  searchSaveButton: {
    color: Colors.highlight,
    fontFamily: 'MainMedium',
  },
  searchContainer: {
    flexDirection: 'column',
  },
  searchLocation: {
    fontSize: 14,
    fontWeight: "400"
  },
  searchContainerResult: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchFilterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchItem: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchItemText: {
    fontSize: 13,
    color: Colors.tintColor,
  },
  searchItemDot: {
    position: 'relative',
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: Colors.highlight,
    marginHorizontal: 5
  },
});

SearchHeader.propTypes = {
  searching: PropTypes.bool,
}

SearchHeader.defaultProps = {
  searching: false,
}

export default SearchHeader;