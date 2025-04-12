import React, { useEffect, useState } from 'react';
import { View, Modal, LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

import styles from '../styles/CheckInFormStyles';
import { initDatabase, fetchFirstName } from '../sqliteService';

import PersonalInfoSection from './CheckInForm/PersonalInfoSection';
import GuestCountSection from './CheckInForm/GuestCountSection';
import OtherChargesSection from './CheckInForm/OtherChargesSection';
import SummarySection from './CheckInForm/SummarySection';

LogBox.ignoreLogs([
    'This method is deprecated', 
    'RNFirebase',
  ]);

interface AddCheckinFormProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
  }

const AddCheckinForm: React.FC<AddCheckinFormProps> = ({ modalVisible, setModalVisible }) => {
  const [sqliteName, setSqliteName] = useState('');
  const [firestoreName, setFirestoreName] = useState('');

  const [guestCounts, setGuestCounts] = useState({
    adult: 0,
    senior: 0,
    kids: 0,
    pwd: 0,
  });

  const [charges, setCharges] = useState({
    cottages: 0,
    electric: 0,
    roundTable: 0,
    monoBlock: 0,
    chairs: 0,
    corkCage: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      await initDatabase();
      const fetchedName = await fetchFirstName();
      setSqliteName(fetchedName);

      const snapshot = await firestore().collection('testCollection').get();
      const doc = snapshot.docs[0];
      if (doc?.exists) setFirestoreName(doc.data()?.name ?? '');
    };

    if (modalVisible) loadData();
  }, [modalVisible]);

  return (
    <View>
      <Modal 
        animationType="fade" 
        transparent visible={modalVisible} 
        onRequestClose={() => setModalVisible(false)}
        >
        <View style={styles.overlay}>
          <View style={styles.formContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={styles.scrollRow}>
                <View style={styles.formContainerLeft}>
                  <PersonalInfoSection setModalVisible={setModalVisible} />
                  <GuestCountSection guestCounts={guestCounts} setGuestCounts={setGuestCounts} />
                  <OtherChargesSection charges={charges} setCharges={setCharges} />
                </View>
                <View style={styles.formContainerRight}></View>
              </View>
            </ScrollView>
            <SummarySection guestCounts={guestCounts} charges={charges} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddCheckinForm;
