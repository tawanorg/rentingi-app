import * as React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { Icon, LinearGradient } from 'expo';
import UserAvatar from '../UserAvatar';
import Colors from '../../constants/Colors';

const IMAGE_HEIGHT = 300;

function PropertyItem({ name, style, photoUrl }) {
  return (
    <TouchableHighlight
      style={[styles.container, style]}
      onPress={() => null}
      underlayColor={Colors.backgroundColor}
    >
      <React.Fragment>
        <View style={styles.userContainer}>
          <UserAvatar
            photoUrl={photoUrl}
          />
          <View style={styles.userHeader}>
            <Text style={styles.userName} numberOfLines={1}>{name}</Text>
            <Text style={styles.userLocation}>Little Bourke St, Melbourne</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground 
            style={styles.image} source={{ uri: photoUrl }}
            resizeMode="cover"
          >
            <LinearGradient
              colors={[
                'transparent', 
                'transparent', 
                'transparent', 
                'rgba(0,0,0,0.1)',
                'rgba(0,0,0,0.3)', 
                'rgba(0,0,0,0.5)', 
              ]}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: IMAGE_HEIGHT,
              }}
            />
          </ImageBackground>
          <View style={styles.roomFlagContainer}>
              <Text style={styles.flagText}>Female Only</Text>
          </View>
          <View style={styles.tagContainer}>
            {/* <Text style={styles.status}>NEW</Text> */}
            <Text style={styles.price}>$230 PER WEEK</Text>
          </View>
        </View>
        <View style={styles.content}>
          {/* <Text style={styles.location}>{name}</Text> */}
          <Text style={styles.title}>Room in a share house with own bathroom</Text>
          {/* <Text style={styles.subtitle}>Spacious house located in quite area. Close to Flinders University and Marion Shopping Centre</Text> */}
        </View>
        <View style={styles.descContainer}>
          <View style={styles.descItem}>
            <Icon.MaterialCommunityIcons
              name="account-group"
              color={Colors.tintColor}
              size={18}
            />
            <Text style={styles.descText}>3</Text>
          </View>
          <View style={styles.descItem}>
            <Icon.MaterialCommunityIcons
              name="shower"
              color={Colors.tintColor}
              size={18}
            />
            <Text style={styles.descText}>3</Text>
          </View>
          <View style={styles.descItem}>
            <Icon.MaterialCommunityIcons
              name="bed-empty"
              color={Colors.tintColor}
              size={18}
            />
            <Text style={styles.descText}>2</Text>
          </View>
          <View style={styles.descItem}>
            <Icon.AntDesign
              name="car"
              color={Colors.tintColor}
              size={18}
            />
            <Text style={styles.descText}>2</Text>
          </View>
        </View>
      </React.Fragment>
    </TouchableHighlight>
  );
};

PropertyItem.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
}

PropertyItem.defaultProps = {
  style: null,
  name: 'Tim Sample',
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderBottomWidth: .5,
    borderTopWidth: .5,
    borderColor: Colors.borderColor,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    position: 'relative',
  },
  tagContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
  },
  status: {
    color: '#FFFFFF',
    padding: 5,
    backgroundColor: Colors.highlight,
  },
  price: {
    color: '#FFFFFF',
    padding: 5,
    fontFamily: 'MainMedium',
    backgroundColor: Colors.highlight,
  },
  image: {
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.3
  },
  content: {
    padding: 10,
  },
  location: {
    fontSize: 16,
    fontFamily: 'MainMedium',
    color: Colors.tintColor
  },
  title: {
    fontFamily: 'Main',
    color: Colors.tintColor,
    marginTop: 5
  },
  subtitle: {
    color: Colors.tintColor
  },
  descContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10
  },
  descItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  descText: {
    marginLeft: 10
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  userHeader: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },  
  userNameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'MainMedium',
    color: Colors.tintColor
  },  
  userLocation: {
    color: Colors.tintColor
  },  
  roomFlagContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    padding: 5,
    color: '#FFFFFF',
    bottom: 0,
    left: 0,
  },
  flagText: {
    fontFamily: 'MainMedium',
    color: '#FFFFFF',
  },
});

export default PropertyItem;