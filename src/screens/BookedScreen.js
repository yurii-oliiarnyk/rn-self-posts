import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DATA } from '../data';
import Post from '../components/Post';
import AppHeaderIcon from '../components/AppHeaderIcon';

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
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter(post => post.booked)}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

BookedScreen.navigationOptions = {
  headerTitle: 'Вибрані',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => console.log('Press camera')}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => console.log('Press camera')}
      />
    </HeaderButtons>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});

export default BookedScreen;
