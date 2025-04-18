import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/LeftSidebarStyles';
import homeIcon from '../icons/homeIcon.png';
import calendarIcon from '../icons/calendarIcon.png';
import messageIcon from '../icons/messagesIcon.png';
import remarksIcon from '../icons/remarksIcon.png';
import haciendaIcon from "../icons/haciendaIcon.png";
  
const LeftSidebar: React.FC = () => {
  type RootStackParamList = {
    CheckIn: undefined;
    Calendar: undefined;
  };

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={styles.sidebar}>
      <Image source={haciendaIcon} style={styles.pictureCircle} />
      
      <View style={styles.navButtonContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CheckIn')}>
          <Image source={homeIcon} style={styles.navButtonIcon}></Image>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Calendar')}>
          <Image source={calendarIcon} style={styles.navButtonIcon}></Image>
          <Text style={styles.navText}>Calendar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CheckIn')}>
        <Image source={calendarIcon} style={styles.navButtonIcon}></Image>
          <Text style={styles.navText}>Transactions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CheckIn')}>
        <Image source={messageIcon} style={styles.navButtonIcon}></Image>
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CheckIn')}>
        <Image source={remarksIcon} style={styles.navButtonIcon}></Image>
          <Text style={styles.navText}>Remarks</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.staffContainer}>
        <View style={styles.staffContLeft}>

        </View>

        <View style={styles.staffContRight}>
          <Text style={styles.staffName}>Rhenzie Reyes</Text>
          <Text style={styles.staffRole }>Assigned Staff</Text>
        </View>
      </View>
    </View>
  );
};

export default LeftSidebar;