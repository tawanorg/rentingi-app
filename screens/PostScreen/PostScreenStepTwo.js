import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import PostHeader from '../../components/PostHeader';
import PostHomeHeader from '../../components/PostHomeHeader';
import PostTag from '../../components/PostTag';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';

const Divider = () => (
  <View style={{ borderTopWidth: .5, borderColor: Colors.borderColor, marginVertical: 20 }} />
)

function Room() {
  this.shared = false;
  this.private = false;
  this.sharedBath = false;
  this.privateBath = false;
}

export default class PostScreenTwo extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <PostHomeHeader navigation={navigation} />
    )
  }; 

  
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      rooms: [],
    }

    this.handleAddRoom = this.handleAddRoom.bind(this);
  }
  
  handleAddRoom() {
    this.setState((prevState) => ({
      rooms: prevState.rooms.concat(new Room())
    }))
  }

  keyExtractor = (item, index) => item;
 
  render() {
    return (
      <FlatList
        data={this.state.rooms}
        keyExtractor={this.keyExtractor}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={this.renderItem}
        ListHeaderComponent={() => (
          <PostHeader 
            title={`Set the price`} 
            subtitle={`About the room(s)`} 
            style={{ marginBottom: 20 }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ marginTop: 10 }}>
            <Button onPress={() => null}>Cancel</Button>
            <Divider />
          </View>
        )}
        ListFooterComponent={() => (
          <View style={{ marginTop: 10, marginBottom: 50 }}>
            <Button onPress={this.handleAddRoom}>Add more room</Button>
          </View>
        )}
      />
    )
  }

  renderItem() {
    return (
      <React.Fragment>
        <Text style={styles.optionTitle}>Price (Per week)</Text>
        <View style={styles.optionContainer}>
          <TextInput
            style={styles.priceInput}
            placeholder="Price"
            value={`$170`}
            onChangeText={(text) => this.setState({text})}
            keyboardType="numeric"
          />
          <PostTag 
            name="Open for offer"
            style={{ flex: 1, height: 70 }}
          />
        </View>
        <Text style={styles.optionTitle}>Bedroom</Text>
        <View style={styles.optionContainer}>
          <PostTag
            name="Shared Bedroom"
            style={{ flex: 1, marginRight: 5, height: 70 }}
            selected
          />
          <PostTag 
            name="Private Bedroom"
            style={{ flex: 1, height: 70 }}
          />
        </View>
        <Text style={styles.optionTitle}>Bathroom</Text>
        <View style={styles.optionContainer}>
          <PostTag
            name="Shared Bathroom"
            style={{ flex: 1, marginRight: 5, height: 70 }}
            selected
          />
          <PostTag 
            name="Private Bathroom"
            style={{ flex: 1, height: 70 }}
          />
        </View>
        <Text style={styles.optionTitle}>Utility</Text>
        <View style={styles.optionContainer}>
          <PostTag
            name="Not included"
            style={{ flex: 1, height: 70 }}
          />
          <PostTag
            name="Included"
            style={{ flex: 1, marginHorizontal: 5, height: 70 }}
            selected
          />
          <PostTag 
            name="Included Partially"
            style={{ flex: 1, height: 70 }}
          />
        </View>
      </React.Fragment>
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
    marginTop: 20, 
    marginHorizontal: 25,
  },
  setContainer: {
    flexDirection: 'column',
  },
  optionContainer: {
    marginVertical: 10, 
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionTitle: {
    fontSize: 18,
    fontFamily: 'Main',
    marginTop: 5
  },
  priceInput: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'MainMedium',
    backgroundColor: Colors.backgroundColor,
    textAlign: 'center',
    borderRadius: 10,
    marginRight: 5,
  }
});