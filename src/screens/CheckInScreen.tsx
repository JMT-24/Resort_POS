import React from 'react';
import { View } from 'react-native';
import LeftSidebar from '../components/LeftSidebar';
import MainContent from '../components/MainContent';
import RightSidebar from '../components/RightSidebar';

const CheckInScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </View>
  );
};

export default CheckInScreen;
