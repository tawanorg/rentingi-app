import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'expo';
import MapScreen from '../screens/MapScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PostScreen from '../screens/PostScreen';
import Colors from '../constants/Colors';
  
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.Feather
      name="home"
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.Feather
      name="search"
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const PostStack = createStackNavigator({
  Post: PostScreen,
}, {
  mode: 'modal',
});

PostStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: false,
    tabBarLabel: () => null,
    tabBarIcon: ({ focused }) => (
      <Icon.Feather
        name="plus-circle"
        size={32}
        color={Colors.highlight}
      />
    ),
  }
};

const ChatStack = createStackNavigator({
  Chat: ChatScreen,
  ChatRoom: ChatRoomScreen,
});

ChatStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "ChatRoom") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    tabBarLabel: () => null,
    tabBarIcon: ({ focused }) => (
      <View style={styles.menu}>
        <Icon.Feather
          name="message-circle"
          size={26}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
        <View style={styles.alert}>
          <Text style={{ color: '#FFFFFF', fontSize: 10, }} />
        </View>
      </View>
    ),
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.Feather
      name="user"
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};


const styles = StyleSheet.create({
  menu: {
    position: 'relative',
  },
  alert: {
    position: 'absolute',
    backgroundColor: Colors.highlight,
    color: '#FFF',
    width: 10,
    height: 10,
    top: 0,
    right: -1,
    borderRadius: 10 / 2,
  },
})

export default createBottomTabNavigator({
  HomeStack,
  MapStack,
  PostStack,
  ChatStack,
  SettingsStack,
});
