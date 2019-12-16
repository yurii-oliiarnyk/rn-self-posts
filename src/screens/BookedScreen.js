import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DATA } from '../data';
import AppHeaderIcon from '../components/AppHeaderIcon';
import PostList from '../components/PostList';

const BookedScreen = props => {
  const { navigation } = props;

  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };

  return (
    <PostList
      data={DATA.filter(post => post.booked)}
      onOpen={openPostHandler}
    />
  );
};

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Вибрані',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});

export default BookedScreen;
