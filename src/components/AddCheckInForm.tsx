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
  const [cottageNums, setCottageNumbers] = useState<number[]>([]);

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
  const [startDate, setStartDate] = useState('None');
  const [endDate, setEndDate] = useState('None');
  const [startTime, setStarTime] = useState('None');
  const [endTime, setEndTime] = useState('None');

  const formatDate = (dateString: string) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    if (dateString === 'None') return '';
  
    const [, month, day] = dateString.split('-').map(Number);  // skip the year
    return `${months[month - 1]} ${day}`;
  };
  
  const isAllSet = (...values: string[]) => values.every(v => v !== 'None');
  
  const datetime = isAllSet(startDate, endDate, startTime, endTime)
    ? `${formatDate(startDate)} - ${formatDate(endDate)} : ${startTime} - ${endTime}`
    : 'All None';

  
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
                    setCottageNums={setCottageNumbers}
                    reservedCottages={reservedCottages}
                    cottageNums={cottageNums}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    setStartTime={setStarTime}
                    setEndTime={setEndTime}
                    datetime={datetime}
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
              cottageNumbers={cottageNums}
              onConfirmClick={openPopup}
              startDate={startDate}
              endDate={endDate}
              startTime={startTime}
              endTime={endTime}
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
