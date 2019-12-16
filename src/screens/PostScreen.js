import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostScreen = props => {
  return (
    <View style={styles.center}>
      <Text>PostScreen</Text>
    </View>
  );
};

PostScreen.navigationOptions = {
  headerTitle: 'Пост 42'
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PostScreen;
