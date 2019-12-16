import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { createDrawerNavigator } from 'react-navigation-drawer';

import AboutScreen from '../screens/AboutScreen';
import CreateScreen from '../screens/CreateScreen';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import BookedScreen from '../screens/BookedScreen';
import { THEME } from '../theme';

const navigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
  }
};

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen
  },
  navigationOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen
  },
  navigationOptions
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

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen
  },
  navigationOptions
);
const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen
  },
  navigationOptions
);

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

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Головна'
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'Про нас'
      }
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: 'Створити пост'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR
    }
  }
);

const AppNavigation = createAppContainer(MainNavigator);

export default AppNavigation;
