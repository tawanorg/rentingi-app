import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'expo';
import MapScreen from '../screens/MapScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Links: LinksScreen,
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
    <View style={styles.menu}>
      <Icon.Feather
        name="search"
        size={26}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
      <View style={styles.alert}>
        <Text style={{ color: '#FFF', fontSize: 10, }}>1.2k</Text>
      </View>
    </View>
  ),
};

const PostStack = createStackNavigator({
  Settings: SettingsScreen,
});

PostStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.Feather
      name="plus-circle"
      size={32}
      color={focused ? '#FFF' : Colors.tintColor}
    />
  ),
};

const NotificationStack = createStackNavigator({
  Settings: SettingsScreen,
});

NotificationStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <View style={styles.menu}>
      <Icon.Feather
        name="message-circle"
        size={26}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
      <View style={styles.alert}>
        <Text style={{ color: '#FFF', fontSize: 10, }}>3</Text>
      </View>
    </View>
  ),
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
    backgroundColor: '#FF0000',
    color: '#FFF',
    paddingHorizontal: 5,
    paddingVertical: 2,
    top: -8,
    right: -4,
    borderRadius: 50,
  },
})

export default createBottomTabNavigator({
  HomeStack,
  MapStack,
  PostStack,
  NotificationStack,
  SettingsStack,
});
