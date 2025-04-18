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
      
      <View style={styles.cottageBoxes}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.Header}>TODAY</Text>
          <Text style={styles.subHeader}>AVAILABLE COTTAGES</Text>
        </View>
        <View style={styles.cottagesGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((cottage) => (
            <TouchableOpacity 
              key={cottage} 
              style={[styles.cottageBox, (cottage % 5 === 0 || cottage % 9 === 0 || cottage === 10) ? styles.unavailable : styles.available]}
            >
              <Text style={[
                styles.cottageText, 
                (cottage % 5 === 0 || cottage % 9 === 0 || cottage === 10) ? { color: "#FF6666" } : { color: "#2388FF" }
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