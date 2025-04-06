import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/LeftSidebarStyles';
  
const LeftSidebar: React.FC = () => {
  type RootStackParamList = {
    CheckIn: undefined;
    Calendar: undefined;
  };

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.sidebar}>
      <View style={styles.profileCircle} />
      <Text style={styles.hotelName}>Hacienda Darasa Resort</Text>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CheckIn')}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Calendar')}>
        <Text style={styles.navText}>Calendar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeftSidebar;