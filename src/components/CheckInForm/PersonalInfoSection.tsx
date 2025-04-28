import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ImageSourcePropType } from 'react-native';
import styles from '../../styles/CheckInForm/PersonalInfoSectionStyles';
import ChooseDateModal from '../CheckInFormDate/ChooseDateModal';
import CottagePickerModal from './CottagePickerModal';

const calendarIcon: ImageSourcePropType = require('../../icons/calendarIcon.png');
const cottageIcon: ImageSourcePropType = require('../../icons/cottageIcon.png');
const numberIcon: ImageSourcePropType = require('../../icons/numberIcon.png');

interface Props {
  setModalVisible: (visible: boolean) => void;
  setFirstname: (text: string) => void;
  setLastname: (text: string) => void;
  setContactNo: (text: string) => void;
  setAddress: (text: string) => void;
  setCottageNums: (numbers: number[]) => void;
  reservedCottages: number[];
  cottageNums: number[];
  setStartDate: (text:string) => void;
  setEndDate: (text:string) => void;
  setStartTime: (text: string) => void;
  setEndTime: (text: string) => void;
  datetime: string;
}

const PersonalInfoSection: React.FC<Props> = ({ setModalVisible, setFirstname, setLastname, 
  setContactNo, setAddress, reservedCottages, cottageNums, setStartDate, setEndDate, setStartTime, setEndTime, datetime,
  setCottageNums}) => {
  const [showDateModal, setShowDateModal] = useState(false);
  const [showCottageModal, setCottageModal] = useState(false);

  return (
    <View style={styles.checkInFormContainer}>
      <View style={styles.checkInPageTop}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.exitButton}>{`<`} Exit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.formHeader}>Personal Information</Text>
      <Text style={styles.formInstruction}>Please double check information</Text>
      <View style={styles.checkInPersonalInfoForm}>
        <View style={styles.checkInPersonalInfoFormLeft}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>First Name</Text>
            <TextInput style={styles.textInput} placeholder="Enter First Name (Optional)" onChangeText={setFirstname}/>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Contact No.</Text>
            <Image source={numberIcon} style={styles.calendarIcon}/>
            <TextInput style={styles.textInput} placeholder="Enter Contact No. (Optional)" 
              keyboardType="phone-pad" onChangeText={setContactNo} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Date</Text>
            <TouchableOpacity onPress={() => setShowDateModal(true)}>
              <Image source={calendarIcon} style={styles.calendarIcon}/>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Date"
                value={datetime === 'All None' ? undefined : datetime}
                editable={false}         
                pointerEvents="none"      
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.checkInPersonalInfoFormRight}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Last Name</Text>
            <TextInput style={styles.textInput} placeholder="Enter Last Name (Optional)" onChangeText={setLastname}/>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Address</Text>
            <TextInput style={styles.textInput} placeholder="Enter Address (Optional)" multiline onChangeText={setAddress}/>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Cottage</Text>
            <TouchableOpacity onPress={() => setCottageModal(true)}>
              <Image source={cottageIcon} style={styles.cottageIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Choose Cottage Number"
                value={cottageNums.length > 0 ? cottageNums.join(', ') : ""} 
                editable={false}         
                pointerEvents="none"      
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ChooseDateModal */}
      <ChooseDateModal modalVisible={showDateModal} setModalVisible={setShowDateModal}
      setStartDate={setStartDate} setEndDate={setEndDate} setStartTime={setStartTime} setEndTime={setEndTime}/>
      {/* Cottage Picker Modal */}
      <CottagePickerModal modalVisible={showCottageModal} setModalVisible={setCottageModal} 
       reservedCottages={reservedCottages} setCottageNumbers={setCottageNums}/>

    </View>
  );
};

export default PersonalInfoSection;
