import React, {useState, useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/RightSidebarStyles';
import AddCheckinForm from './AddCheckInForm';
import { getReservedCottages } from '../database/checkInSqlite';

const RightSidebar: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  var numOfCottages = 14;
  const cottages = Array.from({ length: numOfCottages }, (_, i) => i + 1);

  const [reservedCottages, setReservedCottages] = useState<number[]>([]);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
  
      const fetchReserved = async () => {
        if (!isActive) return;
        const data = await getReservedCottages();
        setReservedCottages(data);
      };
  
      fetchReserved(); // fetch immediately
  
      const interval = setInterval(fetchReserved, 3000); // refresh every 3 sec
  
      return () => {
        isActive = false;
        clearInterval(interval);
      };
    }, [])
  );
  

  const isUnavailable = (cottage: number) => reservedCottages.includes(cottage);

  return (
    <View style={styles.rightSidebar}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.checkInButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.checkInText}>+ Add Check In</Text>
          </TouchableOpacity>
          <AddCheckinForm modalVisible={modalVisible} setModalVisible={setModalVisible}
            reservedCottages={reservedCottages} />
        </View>
      
      <View style={styles.cottageBoxes}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.Header}>TODAY</Text>
          <Text style={styles.subHeader}>AVAILABLE COTTAGES</Text>
        </View>
        <View style={styles.cottagesGrid}>
          {cottages.map((cottage) => (
            <TouchableOpacity
              key={cottage}
              style={[
                styles.cottageBox,
                isUnavailable(cottage) ? styles.unavailable : styles.available,
              ]}
              disabled={isUnavailable(cottage)}
            >
              <Text
                style={[
                  styles.cottageText,
                  isUnavailable(cottage) ? { color: '#FF6666' } : { color: '#2388FF' },
                ]}
              >
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