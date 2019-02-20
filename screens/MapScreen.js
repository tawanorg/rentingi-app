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

const { Marker } = MapView;
let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 60 //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const MAP_OPTIONS = { edgePadding: { top: 50, right: 10, bottom: 10, left: 10 }, animated: true };
const MAP_ICON = require('../assets/images/map-icon.png');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: props => <SearchHeader {...props} />,
  };

  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: false,
      isLayoutMap: true,
      initialRegion: null,
      data: [],
    };

    this.mapRef = React.createRef();
    this.handleToggleView = this.handleToggleView.bind(this);
    this.fitToCoordinates = this.fitToCoordinates.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.loadSampleData();
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
    this.mapRef.current.fitToCoordinates(
      this.state.data,
      MAP_OPTIONS,
    );
  }
 
  renderItem = ({ item }) => (
    <PropertyItem
      name={item.name}
      photoUrl={`https://loremflickr.com/320/240/house`}
      style={{ marginTop: 20 }}
    />
  );

  render() {
    const { isLayoutMap, initialRegion, data, isLoading } = this.state;
    return (
      <View style={styles.container}>
        {
          isLayoutMap ? 
          (<MapView
            provider="google"
            ref={this.mapRef}
            showsUserLocation
            showsCompass
            loadingEnabled={isLoading}
            style={styles.map}
            onMapReady={() => this.fitToCoordinates()}
            initialRegion={{
              latitude: -37.83127517166088,
              latitudeDelta: 0.08053526908207687,
              longitude: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            onLayout={() => {
              console.log('onLayout', this.state.data);
            }}
            onRegionChangeComplete={(region) => {
              this.setState({
                isLoading: true,
              })
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
            ListHeaderComponent={() => <SectionHeader layout="primary" title={`${data.length} APARTMENTS FOR RENT`} style={{ borderTopWidth: 0 }} />}
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