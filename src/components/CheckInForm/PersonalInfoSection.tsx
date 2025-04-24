import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../styles/CheckInForm/PersonalInfoSectionStyles';
import ChooseDateModal from '../CheckInFormDate/ChooseDateModal';
import CottagePickerModal from './CottagePickerModal';

interface Props {
  setModalVisible: (visible: boolean) => void;
  setFirstname: (text: string) => void;
  setLastname: (text: string) => void;
  setContactNo: (text: string) => void;
  setAddress: (text: string) => void;
  setCottageNum: (number: number) => void;
  reservedCottages: number[];
  cottageNum: number;
  setStartTimeCustom: (date: Date | undefined) => void;
  setEndTimeCustom: (date: Date | undefined) => void;
}

const PersonalInfoSection: React.FC<Props> = ({ setModalVisible, setFirstname, setLastname, 
  setContactNo, setAddress, setCottageNum, reservedCottages, cottageNum, setStartTimeCustom, setEndTimeCustom }) => {
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
            <TextInput style={styles.textInput} placeholder="Enter Contact No. (Optional)" 
              keyboardType="phone-pad" onChangeText={setContactNo} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Date</Text>
            <TouchableOpacity onPress={() => setShowDateModal(true)}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Date"
                //value={selectedDate} 
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
              <TextInput
                style={styles.textInput}
                placeholder="Choose Cottage Number"
                value={cottageNum !== 0 ? cottageNum.toString(): ""} 
                editable={false}         
                pointerEvents="none"      
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ChooseDateModal */}
      <ChooseDateModal modalVisible={showDateModal} setModalVisible={setShowDateModal} 
      setStartTimeCustom={setStartTimeCustom} setEndTimeCustom={setEndTimeCustom}/>
      {/* Cottage Picker Modal */}
      <CottagePickerModal modalVisible={showCottageModal} setModalVisible={setCottageModal} 
       SetCottageNumber={setCottageNum} reservedCottages={reservedCottages}/>

    </View>
  );
};

export default PersonalInfoSection;
