import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert
} from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { toogleBooked, removePost } from '../store/actions/post';

const PostScreen = props => {
  const { navigation } = props;

  const postId = navigation.getParam('postId');
  const post = useSelector(state =>
    state.post.allPosts.find(post => post.id === postId)
  );

  const dispatch = useDispatch();

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const toggleHandler = useCallback(() => {
    dispatch(toogleBooked(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  const removeHandler = () => {
    Alert.alert('Видалення пост', 'Ви точно хочете видалити пост?', [
      {
        text: 'Відмінити',
        style: 'cancel'
      },
      {
        text: 'Видалити',
        style: 'destructive',
        onPress: () => {
          navigation.navigate('Main');
          dispatch(removePost(postId));
        }
      }
    ]);
  };

  if (!post) {
    return null;
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title="Видалити" onPress={removeHandler} />
    </ScrollView>
  );
};

PostScreen.navigationOptions = props => {
  const { navigation } = props;
  const date = navigation.getParam('date');
  const toggleHandler = navigation.getParam('toggleHandler');

  const booked = navigation.getParam('booked');
  const icon = booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: 'Пост від ' + new Date(date).toLocaleDateString(),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take phone"
          iconName={icon}
          onPress={() => toggleHandler()}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  }
});

export default PostScreen;
