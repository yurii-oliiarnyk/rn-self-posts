import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import BookedScreen from '../screens/BookedScreen';
import { THEME } from '../theme';

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
  }
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      ),
      tabBarLabel: 'Всі'
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: info => (
        <Ionicons name="ios-star" size={25} color={info.tintColor} />
      ),
      tabBarLabel: 'Вибрані'
    }
  }
};

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: '#fff',
        shifting: true,
        barStyleDark: { backgroundColor: THEME.MAIN_COLOR },
        barStyleLight: { backgroundColor: THEME.MAIN_COLOR }
      })
    : createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: { activeTintColor: THEME.MAIN_COLOR }
      });

const AppNavigation = createAppContainer(BottomNavigator);

export default AppNavigation;
