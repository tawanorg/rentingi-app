import * as React from 'react';
import { Image, FlatList, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import UserAvatar from '../UserAvatar';
var faker = require('faker');

const DATA = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  photoUrl: faker.fake("{{internet.avatar}}"),
}));

const ITEM_SIZE = 60;

class PeopleList extends React.PureComponent {
  _keyExtractor = (item, index) => item;

  onPressItem = () => null;

  renderItem = ({ item }) => (
    <UserAvatar
      id={item.id}
      photoUrl={item.photoUrl}
      size={ITEM_SIZE}
      hightlight={item.id === 3}
    />
  );

  render() {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => (
          {length: ITEM_SIZE, offset: ITEM_SIZE * index, index}
        )}
        data={DATA}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
        ItemSeparatorComponent={() => <View style={{ marginHorizontal: 5 }} />}
        style={styles.list}
        onEndReachedThreshold={500}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    paddingHorizontal: 10,
  }
})

export default PeopleList;