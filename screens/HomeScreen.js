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

  state = { isRefreshing: false };

  _refreshRequest = () => {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);
  };

  overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>

  render() {
    return (
      <View styles={styles.container}>
        <SearchInput style={{ margin: 10 }} />
        <SectionList
          ListHeaderComponent={() => null}
          ListFooterComponent={() => <View style={{ paddingBottom: 60 }} />}
          renderItem={({ item, index, section: { layout } }) => {
            return layout === 'primary' ? (
              <PropertyItem 
                key={index}
                style={{ marginBottom: 10}}
                photoUrl={`https://loremflickr.com/320/240/house`}
              />
            ) : (
              <SaveSearchItem 
                key={index} 
                noborder={index === 1}
              />
            )
          }}
          renderSectionHeader={({ index, section: { title, subtitle, layout }}) => (
            <SectionHeader
              key={index}
              title={title}
              subtitle={subtitle}
              layout={layout}
            />
          )}
          sections={[
            { title: 'Recent Searches', layout: null, data: ['item3', 'item4'] },
            { title: 'Perfect Matches', subtitle: 'Found properties match you\'re looking for', layout: 'primary', data: ['item1', 'item2'] },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});
