import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  View
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { createPost } from '../store/actions/post';

const CreateScreen = props => {
  const { navigation } = props;
  const [text, setText] = useState('');

  const img =
    'https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80';

  const saveHandler = () => {
    const post = { date: new Date().toJSON(), text, img, booked: false };

    dispatch(createPost(post));
    navigation.navigate('Main');
  };

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Створити пост</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Введіть текст поста"
          value={text}
          onChangeText={setText}
          multiline
        />
        <Image
          source={{
            uri: img
          }}
          style={{ width: '100%', height: 200, marginBottom: 10 }}
        />
        <Button
          title="Створити пост"
          color={THEME.MAIN_COLOR}
          onPress={saveHandler}
        />
      </View>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = props => {
  const { navigation } = props;

  return {
    headerTitle: 'Створити пост',
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

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
});

export default CreateScreen;
