import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../styles/CheckInForm/PersonalInfoSectionStyles';
import ChooseDateModal from '../CheckInFormDate/ChooseDateModal';
import CottagePickerModal from './CottagePickerModal';

interface Props {
  setModalVisible: (visible: boolean) => void;
  firstname: (text: string) => void;
  lastname: (text: string) => void;
  contactNo: (text: string) => void;
  address: (text: string) => void;
}

const PersonalInfoSection: React.FC<Props> = ({ setModalVisible, firstname, lastname, contactNo, address }) => {
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
            <TextInput style={styles.textInput} placeholder="Enter First Name (Optional)" onChangeText={firstname}/>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Contact No.</Text>
            <TextInput style={styles.textInput} placeholder="Enter Contact No. (Optional)" 
              keyboardType="phone-pad" onChangeText={contactNo} />
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
            <TextInput style={styles.textInput} placeholder="Enter Last Name (Optional)" onChangeText={lastname}/>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Address</Text>
            <TextInput style={styles.textInput} placeholder="Enter Address (Optional)" multiline onChangeText={address}/>
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Cottage</Text>
            <TouchableOpacity onPress={() => setCottageModal(true)}>
              <TextInput
                style={styles.textInput}
                placeholder="Choose Cottage Number"
                //value={selectedDate} 
                editable={false}         
                pointerEvents="none"      
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ChooseDateModal */}
      <ChooseDateModal modalVisible={showDateModal} setModalVisible={setShowDateModal} />
      {/* Cottage Picker Modal */}
      <CottagePickerModal modalVisible={showCottageModal} setModalVisible={setCottageModal} />

    </View>
  );
};

export default PersonalInfoSection;
