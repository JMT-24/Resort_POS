import React, { useEffect, useState } from 'react';
import { View, Text, Modal, LogBox, TouchableOpacity, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from "../styles/CheckInFormStyles";
import { initDatabase, fetchFirstName } from '../sqliteService';
import { ScrollView } from 'react-native-gesture-handler';

// Suppress Firebase deprecation warnings (safe for now)
LogBox.ignoreLogs([
  'This method is deprecated', 
  'RNFirebase',
]);

interface AddCheckinFormProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const AddCheckinForm: React.FC<AddCheckinFormProps> = ({ modalVisible, setModalVisible }) => {
  const [firestoreName, setFirestoreName] = useState('');
  const [sqliteName, setSqliteName] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        await initDatabase();
        const fetchedSqliteName = await fetchFirstName();
        setSqliteName(fetchedSqliteName);

        const snapshot = await firestore().collection('testCollection').get();
        const firstDoc = snapshot.docs[0];
        if (firstDoc?.exists) {
          const data = firstDoc.data();
          setFirestoreName(data.name || '');
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    if (modalVisible) {
      loadData();
    }
  }, [modalVisible]);

  return (
    <View>
        <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.formContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.scrollRow}>
                        <View style={styles.formContainerLeft}>
                            <View style={styles.checkInPageTop}>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text>{`<`} Exit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.checkInFormContainer}>
                                <Text style={styles.formHeader}>Personal Information</Text>
                                <Text style={styles.formInstruction}>Please double check information</Text>
                                <View style={styles.checkInPersonalInfoForm}>
                                    <View style={styles.checkInPersonalInfoFormLeft}>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>First Name</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter First Name" />
                                        </View>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Contact No.</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Contact No." keyboardType="phone-pad" />
                                        </View>
                                            <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Date</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Date" keyboardType="default" />
                                        </View>
                                    </View>

                                    <View style={styles.checkInPersonalInfoFormRight}>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Last Name</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Last Name" />
                                        </View>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Address</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Address" multiline />
                                        </View>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.checkInFormContainer}>
                                <Text style={styles.formHeader}>Number of Guests</Text>
                                <Text style={styles.formInstruction}>Please double check information</Text>
                                <View style={styles.checkInNumOfGuestForm}>
                                    <View style={styles.checkInNumOfGuestFormTop}>
                                        
                                    </View>

                                    <View style={styles.checkInNumOfGuestFormBottom}>
                                        <View style={styles.checkInPersonalInfoFormLeft}>
                                            <View style={styles.formField}>
                                                <Text style={styles.formLabel}>ID Number 1</Text>
                                                <TextInput style={styles.textInput} placeholder="X72D779GG997DYUG" />
                                            </View>
                                            <View style={styles.formField}>
                                                <Text style={styles.formLabel}>ID Number 2</Text>
                                                <TextInput style={styles.textInput} placeholder="X72D779GG997DYUG" />
                                            </View>
                                        </View>

                                        <View style={styles.checkInPersonalInfoFormRight}>
                                            <View style={styles.formField}>
                                                <Text style={styles.formLabel}>ID Number 1</Text>
                                                <TextInput style={styles.textInput} placeholder="X72D779GG997DYUG" />
                                            </View>
                                            <View style={styles.formField}>
                                                <Text style={styles.formLabel}>ID Number 2</Text>
                                                <TextInput style={styles.textInput} placeholder="X72D779GG997DYUG" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.checkInFormContainer}>
                                <Text style={styles.formHeader}>Other Charges</Text>
                                <Text style={styles.formInstruction}>Please double check information</Text>
                                <View style={styles.checkInPersonalInfoForm}>
                                
                                </View>
                            </View>
                        </View>

                        <View style={styles.formContainerRight}>
                            <View style={styles.summaryBox}>

                            </View>
                        </View>

                    </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    </View>

  );
};

export default AddCheckinForm;
