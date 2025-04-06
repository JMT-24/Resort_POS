import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/RightSidebarStyles';
import AddCheckinForm from './AddCheckInForm';

const RightSidebar: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.rightSidebar}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.checkInButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.checkInText}>+ Add Check In</Text>
          </TouchableOpacity>
          <AddCheckinForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
      <View style={styles.barHeader}>
        <Text style={styles.sidebarHeader}>Cottages</Text>
        <Text style={styles.sidebarSort_btn}>Sort</Text>
      </View>
      <View style={styles.cottageBoxes}>
        <Text style={styles.subHeader}>Available Cottages</Text>
        <View style={styles.cottagesGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((cottage) => (
            <TouchableOpacity 
              key={cottage} 
              style={[styles.cottageBox, (cottage % 5 === 0 || cottage % 9 === 0 || cottage === 10) ? styles.unavailable : styles.available]}
            >
              <Text style={[
                styles.cottageText, 
                (cottage % 5 === 0 || cottage % 9 === 0 || cottage === 10) ? { color: "#fff" } : { color: "#000" }
              ]}>
                {cottage}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default RightSidebar;