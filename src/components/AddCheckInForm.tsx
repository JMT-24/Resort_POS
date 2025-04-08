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
  const [count, setCount] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev -1 : 0));

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
                                <Text style={styles.exitButton}>{`<`} Exit</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.checkInFormContainer}>
                                <Text style={styles.formHeader}>Personal Information</Text>
                                <Text style={styles.formInstruction}>Please double check information</Text>
                                <View style={styles.checkInPersonalInfoForm}>
                                    <View style={styles.checkInPersonalInfoFormLeft}>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>First Name</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter First Name (Optional)" />
                                        </View>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Contact No.</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Contact No. (Optional)" keyboardType="phone-pad" />
                                        </View>
                                            <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Date</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Date" keyboardType="default" />
                                        </View>
                                    </View>

                                    <View style={styles.checkInPersonalInfoFormRight}>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Last Name</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Last Name (Optional)" />
                                        </View>
                                        <View style={styles.formField}>
                                            <Text style={styles.formLabel}>Address</Text>
                                            <TextInput style={styles.textInput} placeholder="Enter Address (Optional)" multiline />
                                        </View>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.checkInFormContainer}>
                                <Text style={styles.formHeader}>Number of Guests</Text>
                                <Text style={styles.formInstruction}>Please double check information</Text>
                                <View style={styles.checkInNumOfGuestForm}>
                                    <View style={styles.checkInNumOfGuestFormTop}>
                                        <View style={styles.checkInPersonalInfoFormLeft}>
                                            <View style={styles.formToggleField}>
                                                <View style={styles.formTogglePic}></View>
                                                <Text style={styles.formToggleLabel}>Adults</Text>
                                                <View style={styles.toggleContainer}>
                                                    <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                        <Text style={styles.toggleSymbol}>−</Text>
                                                    </TouchableOpacity>

                                                    <Text style={styles.toggleValue}>{count}</Text>

                                                    <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                        <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.formToggleField}>
                                                <View style={styles.formTogglePic}></View>
                                                <Text style={styles.formToggleLabel}>Senior</Text>
                                                <View style={styles.toggleContainer}>
                                                    <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                        <Text style={styles.toggleSymbol}>−</Text>
                                                    </TouchableOpacity>

                                                    <Text style={styles.toggleValue}>{count}</Text>

                                                    <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                        <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.checkInPersonalInfoFormRight}>
                                            <View style={styles.formToggleField}>
                                                <View style={styles.formTogglePic}></View>
                                                <Text style={styles.formToggleLabel}>Kids</Text>
                                                <View style={styles.toggleContainer}>
                                                    <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                        <Text style={styles.toggleSymbol}>−</Text>
                                                    </TouchableOpacity>

                                                    <Text style={styles.toggleValue}>{count}</Text>

                                                    <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                        <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.formToggleField}>
                                                <View style={styles.formTogglePic}></View>
                                                <Text style={styles.formToggleLabel}>PWD</Text>
                                                <View style={styles.toggleContainer}>
                                                    <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                        <Text style={styles.toggleSymbol}>−</Text>
                                                    </TouchableOpacity>

                                                    <Text style={styles.toggleValue}>{count}</Text>

                                                    <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                        <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
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
                                <View style={styles.checkInOtherChargesForm}>
                                    <View style={styles.checkInOtherChargesFormLeft}>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Cottages</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{count}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Electric Charge</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{count}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Round Table</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{count}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.checkInOtherChargesFormRight}>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Mono Block</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{count}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.formToggleField}>
                                            <Text style={styles.formToggleLabel}>Chairs</Text>
                                            <View style={styles.toggleContainer}>
                                                <TouchableOpacity style={styles.toggleCircleWhite} onPress={decrement}>
                                                    <Text style={styles.toggleSymbol}>−</Text>
                                                </TouchableOpacity>

                                                <Text style={styles.toggleValue}>{count}</Text>

                                                <TouchableOpacity style={styles.toggleCircleBlue} onPress={increment}>
                                                    <Text style={styles.toggleSymbolPlus}>＋</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    
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
