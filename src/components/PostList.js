import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Post from './Post';

const PostList = props => {
  const { data, onOpen } = props;

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
        ListEmptyComponent={
          <View style={styles.wrapper}>
            <Text style={styles.empty}>Постів поки нема!</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  empty: {
    textAlign: 'center',
    fontSize: 18
  }
});

export default PostList;
