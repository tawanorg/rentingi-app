import React from 'react';
import { View, Image, Text, SectionList, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchInput from '../components/SearchInput';
import SectionHeader from '../components/SectionHeader';
import PropertyItem from '../components/PropertyItem';
import SaveSearchItem from '../components/SaveSearchItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <HomeHeader />,
  };

  overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>

  render() {
    return (
      <View styles={styles.container}>
        <SearchInput style={{ margin: 10 }} />
        <SectionList
          renderItem={({ item, index, section: { layout } }) => {
            return layout === 'property' ? (
              <PropertyItem key={index} style={{ marginBottom: 10}} />
            ) : <SaveSearchItem key={index} noborder={index === 1} />
          }}
          renderSectionHeader={({ index, section: { title, layout }}) => (
            <SectionHeader
              key={index}
              title={title}
              layout={layout}
            />
          )}
          sections={[
            { title: 'SAVE SEARCHES', layout: null, data: ['item3', 'item4'] },
            { title: 'PERFECT MATACHES', layout: 'property', data: ['item1', 'item2'] },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#fff',
  },
});
