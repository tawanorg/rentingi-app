import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import { MapView } from 'expo';
import SearchHeader from '../components/SearchHeader';
import MapController from '../components/MapController';
import PropertyItem from '../components/PropertyItem';
import SectionHeader from '../components/SectionHeader';
import PeopleList from '../components/PeopleList';

const { Marker } = MapView;
let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 60 //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const MAP_OPTIONS = { edgePadding: { top: 50, right: 10, bottom: 10, left: 10 }, animated: true };
const MAP_ICON = require('../assets/images/map-icon.png');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: props => <SearchHeader searching {...props} />,
  };

  constructor(props) {
    super(props);
    
    this.onLayoutTimer = null;
    this.state = {
      isLoading: false,
      isLayoutMap: false,
      data: [],
      region: null,
    };

    this.mapRef = React.createRef();
    this.handleToggleView = this.handleToggleView.bind(this);
    this.fitToCoordinates = this.fitToCoordinates.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentWillMount() {
    this.loadSampleData();
  }

  componentWillUnmount() {
    clearTimeout(this.onLayoutTimer);
  }
 
  loadSampleData() {
    this.setState({
      isLoading: true,
    });

    const response = fetch('https://api.citybik.es/v2/networks/melbourne-bike-share')
    response
    .then(res => res.json())
    .then((res) => {
      const { network: { stations, location }} = res;
      this.setState({
        data: stations.map(station => Object.assign({}, station, {
          title: station.name,
          coordinates: {
            latitude: station.latitude,
            longitude: station.longitude,
          }
        })),
      }, () => this.setState({ isLoading: false }))
    });
  }
  
  handleToggleView() {
    this.setState((prevState) => ({
      isLayoutMap: !prevState.isLayoutMap,
    }));
  }

  fitToCoordinates() {
    this.mapRef.current && 
    this.mapRef.current.fitToCoordinates(
      this.state.data,
      MAP_OPTIONS,
    );
  }
 
  renderItem = ({ item }) => (
    <PropertyItem
      name={item.name}
      photoUrl={`https://loremflickr.com/320/240/house`}
      style={{ marginBottom: 20 }}
    />
  );

  render() {
    const { region, isLayoutMap, data, isLoading } = this.state;
    return (
      <View style={styles.container}>
        {
          isLayoutMap ? 
          (<MapView
            provider="google"
            ref={this.mapRef}
            showsUserLocation
            loadingEnabled={isLoading}
            style={styles.map}
            region={region}
            initialRegion={{
              latitude: -37.83127517166088,
              latitudeDelta: 0.08053526908207687,
              longitude: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            onLayout={() => {
              this.onLayoutTimer = setTimeout(() => {
                this.fitToCoordinates()
              }, 1500);
            }}
            onRegionChangeComplete={(region) => {
              this.setState({
                region,
              });
            }}
          >
          {data.map((marker, index) => (
            <Marker
              key={`${index}-${Math.random()}`}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.name}
              description={marker.name}
            >
            <Image
              source={MAP_ICON}
              style={{ width: 15, height: 15 }}
            />
            </Marker>
          ))}
          </MapView>
          ) :
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.id}
            renderItem={this.renderItem}
            ListHeaderComponent={() => 
              (
                <React.Fragment>
                  <SectionHeader
                    layout="primary"  
                    title={`300 Housemates`}
                    subtitle="Looking for those area"
                    style={{ borderTopWidth: 0, borderBottomWidth: 0 }}
                  >
                    <PeopleList />
                  </SectionHeader>
                  <SectionHeader
                    layout="primary"  
                    title={`${data.length} Properties`}
                    subtitle="Open for rent in 3 locations"
                    style={{ borderBottomWidth: 0 }}
                  />
                </React.Fragment>
              )
            }
          />
        }
        <MapController
          isMap={isLayoutMap}
          view={isLayoutMap ? 'LIST' : 'MAP'}
          onChangeView={this.handleToggleView}
          onPressSearch={this.fitToCoordinates}
          isLoading={isLoading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
