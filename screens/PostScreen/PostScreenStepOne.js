import React from 'react';
import { ScrollView, View, Text, StyleSheet, Slider } from 'react-native';
import PostHeader from '../../components/PostHeader';
import PostHomeHeader from '../../components/PostHomeHeader';
import PostTag from '../../components/PostTag';
import Colors from '../../constants/Colors';
import SearchInput from '../../components/SearchInput';
import SelectOption from '../../components/SelectOption';

const FACILITIES = [
  "Garden / courtyard",
  "Sauna",
  "Gym",
  "Swimming Pool",
  "Internet",
]

const PROPERTY_NUMBERS_OF = {
  BEDROOMS: 'Bedrooms?',
  BATHROOMS: 'Bathrooms?',
  PARKING: 'Parking?',
  HOUSEMATES: 'Housemates?',
}

const Divider = () => (
  <View style={{ borderTopWidth: .5, borderColor: Colors.borderColor, marginVertical: 20 }} />
)

export default class PostScreenOne extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <PostHomeHeader navigation={navigation} />
    )
  };

  state = {
    number: 1,
  }

  increase() {
    this.setState((prevState) => ({
      number: prevState.number + 1
    }))
  }

  decrease() {
    this.setState((prevState) => ({
      number: prevState.number - 1
    }))
  }
 
  render() {
    const { number } = this.state;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
        <PostHeader title={`Start with the basics`} />
        <PostHeader subtitle={`Where is it located?`} />
        <View style={{ marginVertical: 20, flexDirection: 'column'  }}>
          <SearchInput placeholder="Search for your property location" />
          <Text style={styles.locationSelectedText}>8 Grosvenor Street, Abbotsford, VIC, 3067</Text>
        </View>
        <Divider />
        <PostHeader subtitle={`What type of property is this?`} />
        <View style={{ marginVertical: 20, flexDirection: 'row', flexWrap: 'wrap'  }}>
          <PostTag
            name="Apartment / Unit"
            style={{ flex: 1, marginRight: 5 }}
            selected
          />
          <PostTag 
            name="House / Townhouse"
            style={{ flex: 1, marginLeft: 5 }}
          />
        </View>
        <Divider />
        {
          Object.keys(PROPERTY_NUMBERS_OF).map((key) => (
            <SelectOption 
              title={PROPERTY_NUMBERS_OF[key]}
              style={{ marginBottom: 10 }}
              number={number}
              onMinus={() => this.decrease()}
              onPlus={() => this.increase()}
            />
          ))
        }
        <Divider />
        <PostHeader subtitle={`What will housemates have?`} />
        <View style={{ marginVertical: 10, flexDirection: 'column'  }}>
        {
          FACILITIES.map((facility, key) => (
            <PostTag
              key={key}
              name={facility}
              style={{ height: 50, flex: 1, marginBottom: 10 }}
            />
          ))
        }
        </View>
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
  },
  contentContainerStyle: {
    padding: 10,
    marginTop: 10, 
    marginHorizontal: 25,
  },
  questionTitle: {
    color: Colors.tintColor,
    fontFamily: 'Main',
    fontSize: 16,
  },
  locationSelectedText: {
    fontFamily: 'MainMedium',
    fontSize: 18,
    color: Colors.highlight,
    marginTop: 10,
  },
  rangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  },
  rangeCirlce: {
    padding: 1,
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: Colors.backgroundColor,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rangeCircleText: {
    color: Colors.tintColor,
    fontSize: 10,
  },
});