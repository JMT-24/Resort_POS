import React, { act, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../styles/LeftSidebarStyles';

const homeIcon: ImageSourcePropType = require('../icons/homeIcon.png');
const calendarIcon: ImageSourcePropType = require('../icons/calendarIcon.png');
const messageIcon: ImageSourcePropType = require('../icons/messagesIcon.png');
const remarksIcon: ImageSourcePropType = require('../icons/remarksIcon.png');
const haciendaIcon: ImageSourcePropType = require('../icons/haciendaIcon.png');
const rhenziePic: ImageSourcePropType = require('../img/rhenzie.png');

type RootStackParamList = {
  CheckIn: undefined;
  Calendar: undefined;
};

type NavButtonProps = {
  label: string;
  icon: ImageSourcePropType;
  screen: keyof RootStackParamList;
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
};

const RenderNavButton: React.FC<NavButtonProps> = ({ label, icon, screen, activeScreen, setActiveScreen }) => {
  const isActive = activeScreen === screen;
  const [isHovered, setIsHovered] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() => [navigation.navigate(screen), setActiveScreen(screen)]}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={({ pressed }) => [
        styles.navButton,
        isHovered && styles.isHovered,
        pressed && styles.pressed,
        isActive && styles.activePage,
      ]}
    >
      <Image source={icon} style={styles.navButtonIcon} />
      <Text style={styles.navText}>{label}</Text>
    </Pressable>
  );
};

const LeftSidebar: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState('CheckIn')
  return (
    <View style={styles.sidebar}>
      <Image source={haciendaIcon} style={styles.pictureCircle} />

      <View style={styles.navButtonContainer}>
        <RenderNavButton label="Home" icon={homeIcon} screen="CheckIn" activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
        <RenderNavButton label="Calendar" icon={calendarIcon} screen="Calendar" activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
        <RenderNavButton label="Transactions" icon={calendarIcon} screen="Transactions" activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
        <RenderNavButton label="Messages" icon={messageIcon} screen="Messages" activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
        <RenderNavButton label="Remarks" icon={remarksIcon} screen="Remarks" activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
      </View>

      <View style={styles.staffContainer}>
        <View style={styles.staffContLeft}>
          <Image source={rhenziePic} style={styles.staffPic}/>
        </View>
        <View style={styles.staffContRight}>
          <Text style={styles.staffName}>Rhenzie Reyes</Text>
          <Text style={styles.staffRole}>Assigned Staff</Text>
        </View>
      </View>
    </View>
  );
};

export default LeftSidebar;
