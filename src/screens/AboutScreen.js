import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';

const AboutScreen = props => {
  return (
    <View style={styles.center}>
      <Text>Це найкраща програма для особистих заміток!</Text>
      <Text>
        Версія програми <Text style={styles.version}>1.0.0</Text>
      </Text>
    </View>
  );
};

AboutScreen.navigationOptions = props => {
  const { navigation } = props;

  return {
    headerTitle: 'Про нас',
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  version: {
    fontSize: 20
  }
});

export default AboutScreen;
