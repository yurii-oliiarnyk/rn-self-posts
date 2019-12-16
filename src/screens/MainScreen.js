import React from 'react';
import { DATA } from '../data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import PostList from '../components/PostList';

const MainScreen = props => {
  const { navigation } = props;

  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };

  return <PostList data={DATA} onOpen={openPostHandler} />;
};

MainScreen.navigationOptions = props => {
  const { navigation } = props;

  return {
    headerTitle: 'Мій блог',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          iconName="ios-camera"
          onPress={() => navigation.push('Create')}
        />
      </HeaderButtons>
    ),
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Toggle Drawer"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

export default MainScreen;
