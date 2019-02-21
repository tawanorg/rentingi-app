import React from 'react';
import { View, Image, Text, SectionList, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchInput from '../components/SearchInput';
import SectionHeader from '../components/SectionHeader';
import PropertyItem from '../components/PropertyItem';
import SaveSearchItem from '../components/SaveSearchItem';
import PeopleList from '../components/PeopleList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <HomeHeader />,
  };
 
  render() {
    return (
      <View styles={styles.container}>
        <SearchInput style={{ margin: 10 }} />
        <SectionHeader
          title={'Stay connected'}
          subtitle={'People you\'re connected with'}
        >
          <PeopleList />
        </SectionHeader>
        <SectionList
          style={{
            paddingTop: 10
          }}
          stickySectionHeadersEnabled={false}
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
              style={{ borderBottomWidth: 0 }}
            />
          )}
          sections={[
            { title: 'Recent Searches', layout: null, data: [1, 2] },
            { title: 'Perfect Matches', subtitle: 'Dream houses match you\'re looking for', layout: 'primary', data: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
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
