import React from 'react';
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
import { DATA } from '../data';
import AppHeaderIcon from '../components/AppHeaderIcon';

const PostScreen = props => {
  const { navigation } = props;
  const postId = navigation.getParam('postId');

  const post = DATA.find(post => post.id === postId);

  const removeHandler = () => {
    Alert.alert('Видалення пост', 'Ви точно хочете видалити пост?', [
      {
        text: 'Відмінити',
        style: 'cancel'
      },
      {
        text: 'Видалити',
        style: 'destructive',
        onPress: () => console.log('Ask me later pressed')
      }
    ]);
  };

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

  const booked = navigation.getParam('booked');
  const icon = booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: 'Пост від ' + new Date(date).toLocaleDateString(),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take phone"
          iconName={icon}
          onPress={() => console.log('Press button')}
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
