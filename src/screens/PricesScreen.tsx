import React from 'react';
import { View } from 'react-native';
import LeftSidebar from '../components/LeftSidebar';

const PricesScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <LeftSidebar />
    </View>
  );
};

export default PricesScreen;
