import React, { useState, useRef } from 'react';
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
import PhotoPicker from '../components/PhotoPicker';

const CreateScreen = props => {
  const { navigation } = props;
  const [text, setText] = useState('');
  const imgRef = useRef();

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: imgRef.current,
      booked: false
    };

    dispatch(createPost(post));
    navigation.navigate('Main');
  };

  const dispatch = useDispatch();

  const photoPickHandler = uri => {
    imgRef.current = uri;
  };

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
        <PhotoPicker onPick={photoPickHandler} />
        <Button
          title="Створити пост"
          color={THEME.MAIN_COLOR}
          onPress={saveHandler}
          disabled={!text || !imgRef.current}
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
