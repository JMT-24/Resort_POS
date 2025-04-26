import React, { useEffect, useState } from 'react';
import { View, Modal, LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

import styles from '../styles/CheckInFormStyles';
import { initDatabase, fetchFirstName } from '../sqliteService';
import { initCheckInTable } from '../database/checkInSqlite';

import PersonalInfoSection from './CheckInForm/PersonalInfoSection';
import GuestCountSection from './CheckInForm/GuestCountSection';
import OtherChargesSection from './CheckInForm/OtherChargesSection';
import SummarySection from './CheckInForm/SummarySection';
import ConfirmPopupModal from './CheckInForm/ConfirmPopupModal';

LogBox.ignoreLogs([
    'This method is deprecated', 
    'RNFirebase',
  ]);

interface AddCheckinFormProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    reservedCottages: number[];
  }

const AddCheckinForm: React.FC<AddCheckinFormProps> = ({ modalVisible, setModalVisible, reservedCottages }) => {
  const [sqliteName, setSqliteName] = useState('');
  const [firestoreName, setFirestoreName] = useState('');

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const [cottageNum, setCottageNumber] = useState(0);

  const [guestCounts, setGuestCounts] = useState({
    adult: 0,
    senior: 0,
    kids: 0,
    pwd: 0,
  });

  const [charges, setCharges] = useState({
    cottages: 1,
    electric: 1,
    roundTable: 0,
    longTable: 0,
    chairs: 0,
    corkCage: 0,
  });

  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);   
  const [startTimeCustom, setStartTimeCustom] = useState('None');
  const [endTimeCustom, setEndTimeCustom] = useState('None'); 
  const [startTimeManual, setStartTimeManual] = useState('None');
  const [endTimeManual, setEndTimeManual] = useState('None');  
  
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
                  <PersonalInfoSection 
                    setModalVisible={setModalVisible} 
                    setFirstname={setFirstname}
                    setLastname={setLastname}
                    setAddress={setAddress}
                    setContactNo={setContactNo}
                    setCottageNum={setCottageNumber}
                    reservedCottages={reservedCottages}
                    cottageNum={cottageNum}
                    setStartTimeCustom={setStartTimeCustom}
                    setEndTimeCustom={setEndTimeCustom}
                    setStartTimeManual={setStartTimeManual}
                    setEndTimeManual={setEndTimeManual}
                  />
                  <GuestCountSection guestCounts={guestCounts} setGuestCounts={setGuestCounts} />
                  <OtherChargesSection charges={charges} setCharges={setCharges} />
                </View>
                <View style={styles.formContainerRight}></View>
              </View>
            </ScrollView>
            <SummarySection 
              guestCounts={guestCounts}
              charges={charges}
              firstname={firstname}
              lastname={lastname}
              contactNo={contactNo}
              address={address}
              cottageNumber={cottageNum ?? 0}
              onConfirmClick={openPopup}
              startTimeCustom={startTimeCustom}
              endTimeCustom={endTimeCustom}
              startTimeManual={startTimeManual}
              endTimeManual={endTimeManual}
            />
            <ConfirmPopupModal 
            visible={isPopupOpen}
            onClose={closePopup}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddCheckinForm;
