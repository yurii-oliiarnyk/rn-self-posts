import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../theme';

const AppHeaderIcon = props => (
  <HeaderButton
    iconSize={24}
    IconComponent={Ionicons}
    color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
    {...props}
  />
);

export default AppHeaderIcon;